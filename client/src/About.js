import React from "react";
import ContactUs from "./ContactUs";
// import globe from"./media/globe-2.png"



export default function About(){

return (
    <>
    
    <div className="about">
    
    <h3 style={{display:'inline'}}>    🌐   Salt Lake City, Utah</h3><br/>
    
    <p style={{fontSize:'14px', paddingLeft:'15px', display:'inline'}}><a href="mailto:d.ibarra721@gmail.com" target="_blank" rel="noreferrer"  style={{color:'#ff4e00'}}>d.ibarra721@gmail.com</a></p>
    <br/>
    
        <p>I am a  mindful Full Stack Javascript Web Developer. When I am not coding, I am
         <br/>teaching meditation classes. I enjoy creating astehically pleasing applications
         <br/> that empower people to learn something new. </p>
    
   <p>If you would like to work together, use the contact form. Look forward to hearing from you</p> 
    <ContactUs/>

        </div>


    
    </>



)

}