import React from "react"
import {Route, Routes} from "react-router-dom"
import './App.css';
import NavBar from "./NavBar";
import Name from "./Name";
import About from "./About";
import ProjectOne from "./ProjectOne";
import ProjectTwo from "./ProjectTwo";
import ProjectThree from "./ProjectThree";
import ProjectFour from "./ProjectFour";
import Footer from "./Footer";
import ContactUs from "./ContactUs";

function App() {
  return (
    
  
    <>
    
    
    <div className="wrapper">

    <div className="name">
      <Name />

    </div>


      <NavBar />
  
        <Routes>
          <Route  exact path="/" element={<About />} render={() => <About />} />
          <Route  exact path="/projectOne" element={<ProjectOne />} render={() => <ProjectOne />} />
          <Route  exact path="/projectTwo" element={<ProjectTwo />} render={() => <ProjectTwo />} />
          <Route  exact path="/projectThree" element={<ProjectThree />} render={() => <ProjectThree />} />
          <Route  exact path="/projectFour" element={<ProjectFour />} render={() => <ProjectFour />} />
          <Route  exact path="/contact" element={<ContactUs />} render={() => <ContactUs/>} />
          <Route  exact path="/projects" element={<About />} render={() => <About/>} />



        </Routes>




{/* <Footer/> */}

      </div>
      </>




  );
}

export default App;
