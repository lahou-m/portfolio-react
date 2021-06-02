import React, { useState } from 'react';
import Header from '../components/Header';
import emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';
import './styles/Contact.css';

const Contact = () => {

    init("user_Lm2BviR0m0cjGQ1DP4T4X");

    const [name, setName] = useState("");
    const [company, setCompany] = useState("");
    const [subject, setSubject] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const isEmail = () => {
        let notEmail = document.getElementById("not-email")
        let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        if(regex.test(email)){
            notEmail.style.display = "none";
            return true;
        }else{
            notEmail.style.display = "block";
            notEmail.style.animation = "dongle 800ms";
            return false;
        }
    }

    const failMessage = (msg) => {
        let formMsg = document.querySelector('.form-message');

        formMsg.innerHTML = msg;
        formMsg.style.opacity = "1";
        formMsg.style.background = "rgb(253,87,87)";

        document.getElementById('name').classList.add('error');
        document.getElementById('email').classList.add('error');
        document.getElementById('message').classList.add('error');
    }

    const successMessage = () => {
        let formMsg = document.querySelector('.form-message');
        
        formMsg.innerHTML = "Your Message has been sent. thank You !";
        formMsg.style.opacity = "1";
        formMsg.style.background = "#00c1ec";

        
        document.getElementById('name').classList.remove('error');
        document.getElementById('email').classList.remove('error');
        document.getElementById('message').classList.remove('error');

        setTimeout(() => {
            formMsg.style.opacity = "0";
            formMsg.innerHTML = "";
        }, 5000)
    }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(isEmail() && name && message){
        sendFeedback("template_pgjk74h", {
            name,
            company,
            subject,
            email,
            message,
        });
    }else{
        failMessage("Please fill out all required fields");
    }   
  };

  const sendFeedback = (templateId, variables) => {

    emailjs
      .send("service_7o0ryam", templateId, variables)
      .then((res) => {
        successMessage();
        setName("");
        setCompany("");
        setSubject("");
        setEmail("");
        setMessage("");
      })
      .catch(
        (err) => failMessage("An error as occured, please try again !.")
    )
  };

    return (
        <>
        <Header />
        <div className="contact__container">
            <form className="contact-form">
                <div className="form-content">
                    <input
                    type="text"
                    id="name"
                    name="name"
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name *"
                    value={name}
                    autoComplete="off"
                    />
                    <input
                    type="text"
                    id="company"
                    name="company"
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Company"
                    value={company}
                    />
                    <input
                    type="text"
                    id="subject"
                    name="subject"
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="Phone-number"
                    value={subject}
                    />
                    <div className="email-content">
                        <label id="not-email">Email non valide</label>
                        <input
                            type="mail"
                            id="email"
                            name="email"
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email *"
                            value={email}
                            autoComplete="off"
                        />
                    </div>
                    <textarea
                    id="message"
                    name="message"
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Message *"
                    value={message}
                    />
                </div>
                <input
                    className="button"
                    type="button"
                    value="Envoyer"
                    onClick={handleSubmit}
                />
                <div className="form-message"></div>
            </form>
        </div>
        </>
    )
}

export default Contact
