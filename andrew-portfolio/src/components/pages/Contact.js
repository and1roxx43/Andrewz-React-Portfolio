import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";


export default function Contact() {

    const [pName, setPName] = useState("");
    const [email, setEmail] = useState("");
    const [text, setText] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [aMessage, setAMessage] = useState("");

    const handleInputChange = (e) => {
        const { name: inputType, value: inputValue } = e.target;

        if(inputType === "email") {
            setEmail(inputValue);
        } else if(inputType === "pName") {
            setPName(inputValue);
        } else {
            setText(inputValue);
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if(!email && !text && !pName) {
            setErrorMessage("Fill in the form before submitting");
            return;
        }
        if(!validateEmail(email)) {
            setErrorMessage("Enter a valid email address");
            return;
        } else if(!text) {
            setErrorMessage("Enter a text to submit form");
            return;
        } else if (!pName) {
            setErrorMessage("Enter a name before continuing");
            return;
        } else {
            setAMessage(`Your message has been sent ${pName}`);
        }

        setErrorMessage("");
        setEmail("");
        setPName("");
        setText("");
    }

    return (
        <div className="contact-container">
            <h1>Contact</h1>

            <form>
                <input 
                className="input"
                value={pName}
                name="pName"
                onChange={handleInputChange}
                type="text"
                placeholder="Name"
                />

                <input 
                className="input"
                value={email}
                name="email"
                onChange={handleInputChange}
                type="email"
                placeholder="Email"
                />

                <textarea
                className="input textarea"
                value={text}
                name="text"
                onChange={handleInputChange}
                type="text"
                rows="8"
                columns="10"
                placeholder="Enter Message"
                />

                <button className="btn" onClick={handleFormSubmit}>Submit</button>
            </form>

            {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
            )}

            { aMessage && (
                <div>
                    <p className="message">{aMessage}</p>
                </div>
            )

            }


        </div>
    )
}