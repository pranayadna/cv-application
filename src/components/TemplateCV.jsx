import { useState } from "react";
import "./TemplateCV.css";

function TemplateCV() {
  const [status, setStatus] = useState("typing");

  const handleEdit = () => {
    setStatus("edit");
  };

  return (
    <>
      <div className="container">
        <button
          style={{
            marginBottom: "10px",
            padding: "10px",
            textAlign: "center",
            alignSelf: "center",
          }}
        >
          Edit CV
        </button>
        <header>
          <h1 contentEditable="true" style={{ border: "1px solid #000" }}>
            John Doe
          </h1>

          <div className="subtitle">
            <p>6 Victory Way, Edinburgh EH2 09UH</p>
            <p>H: 07912345678M: 07912345678E: James.Brown@example.co.uk</p>
          </div>
        </header>

        <div className="dashed-line"></div>

        <div className="main-content">
          <h3>PROFESSIONAL SUMMARY</h3>
          <p>
            Talented production leader with record of success in technical and
            creative leadership. Collaborative with personnel and talent to
            bring visions to life. Polished communicator and organised project
            manager.
          </p>

          <h3 id="work-history">WORK HISTORY</h3>
          <h4>
            <strong>PRODUCER</strong> | 02/2020 - Current
          </h4>
          <h4>CBS TV - Edinburgh</h4>
          <ul>
            <li>
              Organised schedules for smooth production and on-time delivery of
              creatives.
            </li>
            <li>Oversaw version management and film archives.</li>
            <li>Acquired top talent to fill empty production roles.</li>
          </ul>

          <h4>
            <strong>ASSISTANT PRODUCER</strong> | 02/2017 - 01/2020
          </h4>
          <h4>Morning TV - Edinburgh</h4>
          <ul>
            <li>
              Identified and tracked resource requirements and expectations,
              monitoring actual spending to update projections.
            </li>
            <li>
              Expertly utilised project management tools including Confluence
              and JIRA within production environment.
            </li>
            <li>
              Worked with team of 20+ to create audio and visual content to
              deliver broadcast-ready stories for digital and social clients.
            </li>
          </ul>

          <h3>SKILLS</h3>
          <ul>
            <li>Interview management</li>
            <li>Cast and crew supervision</li>
            <li>Writer commissioning</li>
            <li>Video production oversight</li>
            <li>New programme development</li>
            <li>Screenwriting expertise</li>
          </ul>

          <h3>EDUCATION</h3>
          <p>Edinburgh University - Edinburgh | Bachelor of Arts</p>
          <p>Television Production, 2015</p>
        </div>
      </div>
    </>
  );
}

export { TemplateCV };
