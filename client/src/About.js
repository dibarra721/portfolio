import React from "react";
import { Link } from "react-router-dom";
import astroWeather from "./media/astroWeather.png";
import mindfulness from "./media/mindfulness.png";
import rock from "./media/rock.png"
import astro from "./media/newastro.png";



export default function About() {
  return (
    <>
      <div className="about">
        <center>
  
          <br />
        
          <h1>Projects</h1>
       
          <div className="two">
            <Link to="/projectTwo">
              <img
                src={mindfulness}
                alt="project"
                width={"600px"}
                height={"350px"}
              />
            </Link>
            <br />
            This application was built so that a user can keep a digital journal{" "}
            <br /> of their meditation and movement. <br /><br/>
            View{" "}
            <a
              href="https://mindfulness-journal-app.herokuapp.com"
              className="preview"
              target="_blank"
              rel="noreferrer"
            >
              Live
            </a>
            View{" "}
            <a
              href="https://github.com/dibarra721/Mindfulness-Journal-App-"
              target="_blank"
              rel="noreferrer"
            >
              Code
            </a><br/>
            <br /> React • Node • Express • Mongoose 
          </div>

          <div className="four">
            <Link to="/projectFour">
              <img
                src={astro}
                alt="project"
                width={"600px"}
                height={"350px"}
              />
            </Link>
            <br />
            This application was built so that a user can <br/>have a place to gather
        their astrology information. <br /><br/>
            View{" "}
            <a
              href="https://astrology-application.herokuapp.com/"
              className="preview"
              target="_blank"
              rel="noreferrer"
            >
              Live
            </a>
            View{" "}
            <a
              href="https://github.com/dibarra721/astro-dashboard"
              target="_blank"
              rel="noreferrer"
            >
              Code
            </a><br/>
            <br /> React • Node • Express • Mongoose • MongoDB
          </div><br/>
          <div className="one">
            <Link to="/projectOne">
              <img
                src={astroWeather}
                alt="project"
                width={"600px"}
                height={"350px"}
              />
            </Link>
            <br />
            This application was built so that a user can not only get
            <br /> the weather, but their astronomy information as well. <br /><br/>
            View{" "}
            <a
              href="http://astroweather.surge.sh"
              className="preview"
              target="_blank"
              rel="noreferrer"
            >
              Live
            </a>
            View{" "}
            <a
              href="https://github.com/dibarra721/assignments/tree/main/level-4/capstone"
              target="_blank"
              rel="noreferrer"
            >
              Code
            </a><br/>
            <br /> React • Node • Express
          </div>
          <br/>
          <div className="three">
            <Link to="/projectThree">
              <img
                src={rock}
                alt="project"
                width={"600px"}
                height={"350px"}
              />
            </Link>
            <br />
            This application was built so that a user can keep track with<br/> 
            issues that are important to their community. <br /><br/>
            View{" "}
            <a
              href="https://voting-rocks.herokuapp.com/"
              className="preview"
              target="_blank"
              rel="noreferrer"
            >
              Live
            </a>
            View{" "}
            <a
              href="https://github.com/dibarra721/vote"
              target="_blank"
              rel="noreferrer"
            >
              Code
            </a><br/>
            <br /> React • Node • Express • Mongoose • MongoDB
          </div>
        </center>
      </div>
    </>
  );
}
