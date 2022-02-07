import React from "react"
import {Link} from "react-router-dom"



export default function NavBar(){

    return(
<div className="navBar">

 <nav>
  
  <li><Link to="/">About</Link></li>
  <li><Link to="/projectOne">Project One</Link></li>
  <li><Link to="/projectTwo">Project Two</Link></li>
  <li><Link to="/projectThree">Project Three</Link></li>

</nav> 

</div>



    )
}