// import  from "react";
import React from "react";
import { useEffect, useState } from "react";
import { TemplateCV } from "./TemplateCV";
import InputWithFloatLabel from "./InputWithFloatLabel";
import { dataList } from "./data";
import "../styles/Form.css";

function Form() {
  const [status, setStatus] = useState("typing");
  const [form, setFormData] = useState({});
  const [hideButton, setHideButton] = useState(false);
  // const [currentPage, setCurrentPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(0); // Start from page 0

  const [transitioning, setTransitioning] = useState(false);

  console.log("form data prop:", dataList);

  // const [email, setEmail] = useState("");
  // const [phone, setPhone] = useState("");

  // const handleChildFormData = (formData) => {
  //   setFormData(formData);
  //   console.log("Form data:", form);
  // };

  // console.log("status:", status);

  // useEffect(() => {
  //   console.log("Updated Form Data:", form);
  // }, [form]);

  const handleStatus = (status) => {
    setStatus(status);
    // console.log("status:", status);
    // console.log("Form data:", formData);
  };

  // const handleEdit = () => {
  //   setStatus("edit");
  // };

  // const handleNameChange = (e) => {
  //   setName(e.target.value);
  // };

  // const handleEmailChange = (e) => {
  //     setEmail(e.target.value);
  // }

  // const handlePhoneChange = (e) => {
  //     setPhone(e.target.value);
  // }

  const isSubmit = status === "submit";
  // const isEdit = status === "edit";

  // if (isSubmit) {
  //     return (
  //         <div>
  //             <TemplateCV
  //                 name={name}
  //                 // email={email}
  //                 // phone={phone}
  //             />
  //             {/* <p>{name}</p> */}
  //         </div>
  //     )
  // }

  // const handlePrevButton = () => {
  //   setPageButton(1);
  //   // setVisible(!visible);
  // };

  // const handleNextButton = () => {
  //   setPageButton(0);
  //   setVisible(!visible);
  // };

  const totalPages = dataList.length;
  // // process.argv[2]
  // console.log("total pages:", totalPages);

  // const handlePageSwitch = (direction) => {
  //   setTransitioning(true);
  //   setTimeout(() => {
  //     setCurrentPage((prev) => {
  //       direction === "next"
  //         ? (prev + 1) % totalPages
  //         : (prev - 1 + totalPages) % totalPages;
  //     });
  //     // setCurrentPage(currentPage + 1);
  //     setTransitioning(false);
  //   }, 300); // Matches CSS transition duration
  // };

  const handlePageSwitch = (direction) => {
    totalPages === 0 && direction === "prev"
      ? setHideButton(true)
      : setHideButton(false);

    setTransitioning(true);
    setTimeout(() => {
      setCurrentPage(
        (prev) =>
          // {
          // let totalPages = dataList.length; // Ensure it's defined correctly

          // if (totalPages === 0) return prev; // Prevent errors if empty

          // let newPage =
          direction === "next"
            ? (prev + 1) % totalPages // Wrap around
            : (prev - 1 + totalPages) % totalPages // Handle negative indices

        // return newPage;
        // }
      );
      setTransitioning(false);
    }, 300);
  };

  // console.log("currentPage:", currentPage);
  // console.log("dataList:", dataList);
  // console.log("page:", dataList[currentPage]);
  // console.log("page.subtitle:", dataList[currentPage]?.subtitle);

  let page = dataList[currentPage];
  // console.log("currentPage:", currentPage);
  // console.log("dataList:", dataList);
  // console.log("page:", page);
  // console.log("page.subtitle:", page?.subtitle);

  return (
    <div className="bg-primary">
      {console.log(
        "Current Page:",
        currentPage,
        "Data:",
        dataList[currentPage]
      )}

      {isSubmit ? (
        <div>
          <TemplateCV receivedFormData={form} />
          {/* <button onClick={handleEdit}>Edit</button> */}
        </div>
      ) : (
        // :
        // isEdit ? (
        //   <div>
        //     <form>
        //       <label>
        //         Name:
        //         <input type="text" />
        //       </label>
        //       <br />
        //       <button type="submit">Generate</button>
        //     </form>
        //   </div>
        // )
        <div>
          {/* <h1>Fill in the form to generate your CV</h1>
          <form onSubmit={handleSubmit}>
            <label>
              Name:
              <input type="text" value={name} onChange={handleNameChange} />
            </label>
            <br />
            <label>
              Email:
              <input
                type="email"
                name="email"
                id="email"
                // value={handleEmailChange}
              />
            </label>
            <br />
            <label>
              Phone Number:
              <input
                type="tel"
                name="phone"
                id="phone"
                // value={handlePhoneChange}
              />
            </label>
            <br />
            <button type="submit">Generate</button>
          </form> */}

          <button
            className={`carousel-btn prev ${hideButton ? "hide" : "show"}`}
            onClick={() => handlePageSwitch("prev")}
          >
            &#8656;
          </button>
          <button
            className={`carousel-btn next ${hideButton ? "hide" : "show"}`}
            onClick={() => handlePageSwitch("next")}
          >
            &#8658;
          </button>
          {/* {dataList.map((data, index) => ( */}
          {page.subtitle && (
            <div
              // key={index}
              className={`form-container ${transitioning ? "hide" : "show"}`}
            >
              <h1>Fill in the form to generate your CV</h1>
              <h2>{page.subtitle}</h2>
              <div className="field-container">
                {page.fields.map((field, fieldIndex) => (
                  <React.Fragment key={fieldIndex}>
                    <InputWithFloatLabel
                      inputName={field.inputName}
                      labelLine={field.labelLine}
                    />
                  </React.Fragment>
                ))}
              </div>
            </div>
          )}
          {/* ))} */}
          {/* {pageButton ? (
            <div
              className={`form-container ${transitioning ? "hide" : "show"}`}
            >
              <h1>Fill in the form to generate your CV</h1>
              <h2>General Information</h2>
              <div className="field-container">
                <InputWithFloatLabel
                  inputName={"name"}
                  labelLine={"Enter your name"}
                />
                <InputWithFloatLabel
                  inputName={"email"}
                  labelLine={"Enter your email"}
                />
                <InputWithFloatLabel
                  inputName={"phone_number"}
                  labelLine={"Enter your phone_number"}
                />
              </div>
            </div>
          ) : (
            <div
              className={`form-container ${transitioning ? "hide" : "show"}`}
            >
              <h1>Fill in the form to generate your CV 2</h1>
              <h2>General Information 2</h2>
              <div className="field-container">
                <InputWithFloatLabel
                  inputName={"name"}
                  labelLine={"Enter your name"}
                />
                <InputWithFloatLabel
                  inputName={"email"}
                  labelLine={"Enter your email"}
                />
                <InputWithFloatLabel
                  inputName={"phone_number"}
                  labelLine={"Enter your phone_number"}
                />
              </div>
            </div>
          )} */}
        </div>
      )}
      {/* <InputWithFloatLabel
        sendFormData={setFormData}
        // sendStatus={handleStatus}
      />
      <TemplateCV receivedFormData={form} /> */}
    </div>
  );
}

export { Form };
