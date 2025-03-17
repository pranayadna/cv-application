import { useState } from "react";
import "../components/InputWithFloatLabel.css";

const InputWithFloatLabel = ({ inputName, labelLine }) => {
  const [formData, setFormData] = useState({});

  // let formData = {};

  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log("name, value", name, value);

    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    // formData = { [name]: value };
    // console.log("Form data:", formData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendFormData({ ...formData });
    sendStatus("submit");
  };

  return (
    <>
      <div className="field-area">
        <div className="entryarea">
          <input
            className="input-primary"
            type="text"
            name={inputName} // prop name
            // onChange={handleChange}
            required
          />
          <div className="labelline">
            {labelLine} {/** prop labelline */}
          </div>
        </div>
      </div>
      {/* <div className="form-container"> => form-container inside parent Form
        <h1>Fill in the form to generate your CV</h1> => h1 inside parent Form
        <h2>General Information</h2> => h2 inside parent Form */}
      {/* <form onSubmit={handleSubmit}> => form tag inside parent Form */}
      {/* <div className="field-container"> => field-container parent Form */}
      {/* <div className="field-area">
              <div className="entryarea">
                <input
                  className="input-primary"
                  type="text"
                  name="email"
                  onChange={handleChange}
                  required
                />
                <div className="labelline">Enter your email</div>
              </div>
            </div>
            <div className="field-area">
              <div className="entryarea">
                <input
                  className="input-primary"
                  type="text"
                  name="phone_number"
                  onChange={handleChange}
                  required
                />
                <div className="labelline">Enter your phone number</div>
              </div>
            </div> */}
      {/* </div> */}

      {/* <h2>Educational Experience</h2>
          <div className="field-container">
            <div className="field-area">
              <div className="entryarea">
                <input
                  className="input-primary"
                  type="text"
                  name="school"
                  onChange={handleChange}
                  required
                />
                <div className="labelline">Enter your school name</div>
              </div>
            </div>
            <div className="field-area">
              <div className="entryarea">
                <input
                  className="input-primary"
                  type="text"
                  name="school_title"
                  onChange={handleChange}
                  required
                />
                <div className="labelline">Enter your title of study</div>
              </div>
            </div>
            <div className="field-area">
              <div className="entryarea">
                <input
                  className="input-primary"
                  type="text"
                  name="date_of_study"
                  onChange={handleChange}
                  required
                />
                <div className="labelline">Enter your date of study</div>
              </div>
            </div>
          </div>
  
          <h2>Practical Experience</h2>
          <div className="field-container">
            <div className="field-area">
              <div className="entryarea">
                <input
                  className="input-primary"
                  type="text"
                  name="company"
                  onChange={handleChange}
                  required
                />
                <div className="labelline">Enter your company name</div>
              </div>
            </div>
            <div className="field-area">
              <div className="entryarea">
                <input
                  className="input-primary"
                  type="text"
                  name="company_title"
                  onChange={handleChange}
                  required
                />
                <div className="labelline">Enter your position title</div>
              </div>
            </div>
            <div className="field-area">
              <div className="entryarea">
                <input
                  className="input-primary"
                  type="text"
                  name="job"
                  onChange={handleChange}
                  required
                />
                <div className="labelline">Enter your job responsibilities</div>
              </div>
            </div>
            <div className="field-area">
              <div className="entryarea">
                <input
                  className="input-primary"
                  type="text"
                  name="date_of_job"
                  onChange={handleChange}
                  required
                />
                <div className="labelline">Enter your date start and end job</div>
              </div>
            </div> */}
      {/* onClick={() => sendStatus("submit")} */}
      {/* <button onClick={() => sendStatus("submit")}>Submit</button> */}
      {/* <button className="btn-primary">Submit</button> => button inside parent Form */}
      {/* </div>
        </form>
      </div> */}
    </>
  );
};

export default InputWithFloatLabel;
