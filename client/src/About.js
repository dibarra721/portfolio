import React from "react";
import { Link } from "react-router-dom";
import astroWeather from "./media/astroWeather.png";
import mindfulness from "./media/mindfulness.png";
import rock from "./media/rock.png"
import astro from "./media/astro.png";



export default function About() {
  return (
    <>
      <div className="about">
        <center>
          <p>I look forward to hearing from you</p> <br />
          <Link to="/contact" className="btn-primary">
            {" "}
            Contact Now{" "}
          </Link>
          <br />
          <p>Click on each image to take you to the Project Page</p>

          <div className="four">
            <Link to="/projectFour">
              <img
                src={astro}
                alt="project"
                width={"425px"}
                height={"350px"}
              />
            </Link>
            <br />
            This application was built so that a user can <br/>have a place to gather
        their astrology information. <br />
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
            </a>
            <br /> React • Node • Express • Mongoose • MongoDB
          </div><br/>
          <div className="two">
            <Link to="/projectTwo">
              <img
                src={mindfulness}
                alt="project"
                width={"425px"}
                height={"350px"}
              />
            </Link>
            <br />
            This application was built so that a user can keep a digital journal{" "}
            <br /> of their meditation and movement. <br />
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
            </a>
            <br /> React • Node • Express • Mongoose 
          </div>
          <div className="one">
            <Link to="/projectOne">
              <img
                src={astroWeather}
                alt="project"
                width={"425px"}
                height={"350px"}
              />
            </Link>
            <br />
            This application was built so that a user can not only get
            <br /> the weather, but their astronomy information as well. <br />
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
            </a>
            <br /> React • Node • Express
          </div>
          <br/>
          <div className="three">
            <Link to="/projectThree">
              <img
                src={rock}
                alt="project"
                width={"450px"}
                height={"350px"}
              />
            </Link>
            <br />
            This application was built so that a user can keep track with<br/> 
            issues that are important to their community. <br />
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
            </a>
            <br /> React • Node • Express • Mongoose • MongoDB
          </div>
        </center>
      </div>
    </>
  );
}
