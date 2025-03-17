import { useState } from "react";
// import "./TemplateCV.css";

function TemplateCV({ receivedFormData }) {
  const [status, setStatus] = useState("finish");
  const [border, setBorder] = useState("none");
  const [name, setName] = useState(receivedFormData?.name);
  const [email, setEmail] = useState(receivedFormData?.email);
  const [phoneNumber, setPhoneNumber] = useState(
    receivedFormData?.phone_number
  );
  // const [name, setName] = useState("John Doe");

  console.log("cv data:", receivedFormData);

  const handleEdit = () => {
    setStatus("edit");
  };

  const handleSubmit = () => {
    setStatus("finish");
  };

  const handleMouseEnter = () => {
    setBorder("1px solid #000");
  };

  const handleMouseLeave = () => {
    setBorder("none");
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const isEdit = status === "edit";

  return (
    <>
      {isEdit ? (
        <div className="container">
          <button
            onClick={handleSubmit}
            style={{
              marginBottom: "10px",
              padding: "10px",
              textAlign: "center",
              alignSelf: "center",
            }}
          >
            Submit CV
          </button>
          <header>
            {/* <h1
              contentEditable
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={{ border: border }}
            >
              John Doe
            </h1> */}
            <input
              // contentEditable
              onChange={handleNameChange}
              value={name}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={{
                textAlign: "center",
                border: border,
                color: "#102A72",
                fontSize: "2em", // Large font size like h1
                fontWeight: "bold", // Bold text like h1
                padding: "0", // Remove default padding
                margin: "0", // Remove default margin
                outline: "none", // Remove focus outline
                width: "100%", // Full width (optional)
                background: "transparent", // Transparent background (optional)
              }}
            />

            <div className="subtitle">
              <p>6 Victory Way, Edinburgh EH2 09UH</p>
              <p>H: 07912345678M: 07912345678E: James.Brown@example.co.uk</p>
            </div>
          </header>
        </div>
      ) : (
        <div className="container">
          <button
            onClick={handleEdit}
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
            {/* <p>{receivedFormData}</p> */}

            <h1 style={{ color: "#000" }}>{name}</h1>
            <div className="subtitle">
              <p>6 Victory Way, Edinburgh EH2 09UH</p>
              <p>
                {phoneNumber} | {email}
              </p>
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
                Organised schedules for smooth production and on-time delivery
                of creatives.
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
      )}
    </>
  );
}

export { TemplateCV };
