import { useState } from "react";
// import { TemplateCV } from "./TemplateCV";

function Form() {
    const [status, setStatus] = useState("typing");
    const [name, setName] = useState("");
    // const [email, setEmail] = useState("");
    // const [phone, setPhone] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus("submit");
    }

    const handleEdit = () => {
        setStatus("edit")
    }

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    // const handleEmailChange = (e) => {
    //     setEmail(e.target.value);
    // }
    
    // const handlePhoneChange = (e) => {
    //     setPhone(e.target.value);
    // }

    const isSubmit = status === "submit";
    const isEdit = status === "edit";

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

    return (
        <div>
            {isSubmit ? 
            (
                <div>
                    <p>Name: {name}</p>
                    <button onClick={handleEdit}>Edit</button>
                </div>
            ) 
            : isEdit ?
            (
                <div>
                    <form onSubmit={handleSubmit}>
                        <label>
                            Name:{" "}
                            <input 
                                type="text" 
                                value={name}
                                onChange={handleNameChange}
                            />
                        </label>
                        <br />
                        <button type="submit">Generate</button>
                    </form>
                </div>
            )
            :
            (
                <div>
                    <h1>Fill in the form to generate your CV</h1>
                    <form onSubmit={handleSubmit}>
                        <label>
                            Name:{" "}
                            <input 
                                type="text" 
                                value={name}
                                onChange={handleNameChange}
                            />
                        </label>
                        <br />
                        <label>
                            Email:{" "}
                            <input 
                                type="email" 
                                name="email" 
                                id="email"
                                // value={handleEmailChange} 
                            />
                        </label>
                        <br />
                        <label>
                            Phone Number:{" "}
                            <input 
                                type="tel" 
                                name="phone" 
                                id="phone" 
                                // value={handlePhoneChange}
                            />
                        </label>
                        <br />
                        <button type="submit">Generate</button>
                    </form>
                </div>
            )
            }   
        </div>
    )
}

export { Form };