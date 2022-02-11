import React from "react"
import {Link} from "react-router-dom"



export default function NavBar(){

    return(
<div className="navBar">

 <nav>
  
  <li><Link to="/">Home</Link></li>
  <li><Link to="/projects">Projects</Link></li>

  {/* <li><Link to="/projectOne">Astronomy and Weather </Link></li>
  <li><Link to="/projectTwo">Mindfulness Journal</Link></li>
  <li><Link to="/projectThree">Rock the Vote</Link></li>
  <li><Link to="/projectFour">Astrology Dashboard</Link></li> */}
  <li><Link to="/contact">Contact</Link></li>



</nav> 

</div>



    )
}