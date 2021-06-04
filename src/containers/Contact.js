import React, { useState } from 'react';
import Header from '../components/Header';
import emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';
import './styles/Contact.css';

const Contact = () => {

    const mailSvg = <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mail" width="40" height="40" viewBox="0 0 24 24" stroke-width="1.5" stroke="#635bff" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><rect x="3" y="5" width="18" height="14" rx="2" /><polyline points="3 7 12 13 21 7" /></svg>;
    const addressSvg = <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-map-pin" width="40" height="40" viewBox="0 0 24 24" stroke-width="1.5" stroke="#635bff" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><circle cx="12" cy="11" r="3" /><path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" /></svg>


    init("user_Lm2BviR0m0cjGQ1DP4T4X");

    const [name, setName] = useState("");
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
        let formMsg = document.querySelector('.contact__formMessage');

        formMsg.innerHTML = msg;
        formMsg.style.opacity = "1";
        formMsg.style.background = "rgb(253,87,87)";

        document.getElementById('name').classList.add('error');
        document.getElementById('email').classList.add('error');
        document.getElementById('message').classList.add('error');
    }

    const successMessage = () => {
        let formMsg = document.querySelector('.contact__formMessage');
        
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
            <h1>Contact</h1>
            <form className="contact__form">
                <div className="contact__formContent">
                    <input
                    type="text"
                    id="name"
                    name="name"
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name *"
                    value={name}
                    autoComplete="off"
                    />
                    <div className="contact__emailContent">
                        <label id="not-email">invalid Email</label>
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
                    <input
                    type="text"
                    id="subject"
                    name="subject"
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="Subject (optional)"
                    value={subject}
                    />
                    <textarea
                    id="message"
                    name="message"
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Message *"
                    value={message}
                    />
                </div>
                <input
                    className="contact__button"
                    type="button"
                    value="Submit"
                    onClick={handleSubmit}
                />
                <div className="contact__formMessage"></div>
            </form>
            <div className="contact__info">
                <h1>Any question, request or suggestion will be very appreciated </h1>
                <div style={{display: 'flex', alignItems: "center", marginBottom: '15px'}}>
                    <a href="">{mailSvg}</a>
                    <p style={{marginLeft:'10px'}}>Lm.sparklingdev@gmail.com
                    </p>
                </div>
                <div style={{display: 'flex', alignItems: "center"}}>
                    <a href="">{addressSvg}</a>
                    <p style={{marginLeft:'10px'}}>Dubai, United Arab Emirates
                    </p>
                </div>
                <img src="./assets/hero.svg" alt="" />
            </div>
        </div>
        </>
    )
}

export default Contact
