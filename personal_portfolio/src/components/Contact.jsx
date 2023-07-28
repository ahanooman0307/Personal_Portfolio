import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/Contact.css'

const Contact = () =>{
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_237zmmm', 'template_ztwss2j', form.current, 'h8TUDr9S6vpOp4Pvj')
        .then((result) => {
            console.log(result.text);
            alert   ("Thank you for sending your message! I will contact you shortly! - Akshay Hanooman");
            e.target.reset();
        }, (error) => {
            console.log(error.text);
        });
    };
    return(
        <div className="contactContainer" id = "contact_section">
            <div className="title">Contact Me</div>
            <form  ref = {form} onSubmit={sendEmail}>
                {/* <h3>Contact Me</h3> */}
                <input type="text" name="name" placeholder="Your Name" required />
                <input type="email" name="email" placeholder="Your Email"  required/>
                <input type="tel" name="phone" placeholder="Phone Number (optional)" />   
                <textarea name = "message" rows = "4" placeholder="Message" required></textarea>
                <button type="submit">Send</button>


            </form>

            
        </div>
        
    )
}

export default Contact;