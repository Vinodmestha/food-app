import React, { useState } from 'react';


function Contact(){

        const [input, setInput] =useState("");
        const [inputMail, setInputMail] =useState("");
        const [inputText, setInputText] =useState("");

        const [item, setItem] = useState([]);

        const nameChange =(e) =>{
            setInput(e.target.value);
        }
        const emailChange =(e) =>{
            setInputMail(e.target.value);
  
        }
        const textChange =(e) =>{
            setInputText(e.target.value);

        }

        const contactForm = () =>{
            setItem ((items) =>{
               return [input, inputMail, inputText];
            });

        }


    return(
        <div className="contact-form">
            <div className="conatct-touch">
                <span>Get in Touch</span>

            </div>
            <form onSubmit={contactForm}>
                <div className="username">
                    <div className="user">
                        <label for="username">Name</label><br/>
                        <input type="text"  onChange={nameChange}></input>
                        <span></span>
                    </div>
                    <div className="email">
                        <label for="Email" >Email</label><br/>
                        <input type="email"  onChange={emailChange}></input><br/>
                        <span></span>

                    </div>
                </div>
                <div className="text-area">

                    <label for="message">Message</label><br/>
                    <textarea onChange={textChange}></textarea>
                    <span></span>

                </div>
                
                <button1>Submit</button1>

            </form>
            <div className="display-output">
            <h3>User Information</h3>
            <ol>
                {
                item.map ((itemval) =>{
                return <li>{itemval} </li>
                })
            }
                </ol>
            </div>        
            
        </div> 
    )
}
export default Contact;