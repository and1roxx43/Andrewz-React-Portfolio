import React from "react";
import { NavLink } from "react-router-dom";
import Author from "./Author";


export default function NavMenu () {
    return (
        <div className="nav-menu">
            <div className="author-title">
                <Author />
            </div>
            
            <div >
           
           <ul className="navbar-item">
               <li>
                   <NavLink to="/">Home</NavLink>
               </li>
               <li>
                   <NavLink to="/about">About me</NavLink>
               </li>
               <li>
                   <NavLink to="/portfolio">Portfolio</NavLink>
               </li>
               <li>
                   <NavLink to="/contact">Contact</NavLink>
               </li>
               <li>
                   <NavLink to="/resume">Resume</NavLink>
               </li>
           </ul>

       </div>
        </div>
        
     
    )
}

