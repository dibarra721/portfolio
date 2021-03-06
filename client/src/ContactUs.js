import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "default_service",
        "template_fccx4s9",
        form.current,
        "user_lVmXyJq8Ky1q2NPJC58pZ"
      )
      .then(
        (result) => {
          alert("Thank you for reaching out, I will get in touch shortly");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (


  <>
  <div className="contactForm">
  
  
  <h2> I look forward to hearing from you.</h2>
  <form id="form" ref={form} onSubmit={sendEmail}>
      <label>Name :</label>
      <input type="text" name="to_name" placeholder="your name" />
      <br />
      <label>Email: </label>
      <input type="email" name="from_name" placeholder="your email" />
      <br />
      <label>Message:</label>
      <textarea name="message" />
      <br />
      <input type="submit" value="Send" placeholder="your Message" />
    </form></div></>
  );
};

export default ContactUs;
