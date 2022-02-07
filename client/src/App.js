import React from "react"
import {Route, Routes} from "react-router-dom"
import './App.css';
import NavBar from "./NavBar";
import Name from "./Name";
import About from "./About";
import ProjectOne from "./ProjectOne";
import ProjectTwo from "./ProjectTwo";
import ProjectThree from "./ProjectThree";

function App() {
  return (
    
  
    <>
    

    
    <div className="wrapper">

    <div className="name">
      <Name />

    </div>

{/* 
      <div className="content"> */}

      <NavBar />
  


        <Routes>
          <Route  exact path="/" element={<About />} render={() => <About />} />
          <Route  exact path="/projectOne" element={<ProjectOne />} render={() => <ProjectOne />} />
          <Route  exact path="/projectTwo" element={<ProjectTwo />} render={() => <ProjectTwo />} />
          <Route  exact path="/projectThree" element={<ProjectThree />} render={() => <ProjectThree />} />


          {/* <Route path= "*"element={<NotFound/>} render={() => <NotFound />} /> */}


        </Routes>






      </div>
      </>




  );
}

export default App;
