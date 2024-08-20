import React, { useEffect, useState } from "react";
import "./Hamburger_menu.css"
import { bubble as Menu } from "react-burger-menu";
import { useRef } from "react";
function Hambuger_menu(){
    const [isOpen,setisOpen]=useState(false);
    const ref = useRef("Menu");

function handleOpenMenu() {
   if(isOpen){
    ref.current.style.display="block";
   
   }else{
    ref.current.style.display="none";
   }
   setisOpen(!isOpen)
}

function handleClickOutside(event) {
    if (ref.current && !ref .current.contains(event.target)) {
        setisOpen(false);
    }
}


    return(
        <div className="bg-hamburger" onClick={()=>{handleOpenMenu()}}>
            <div onClick={()=>{handleOpenMenu()}}>
            <span className="bg-burger-bars"></span>
            <span className="bg-burger-bars"></span>
            <span className="bg-burger-bars"></span>
            </div>

            <div className="bg-burger-menu-item bubble" ref={ref}>
            <ul className="cursor">
               
               <li><a href="https://www.google.com">Home</a></li>
               <li>Services</li>
               <li>About</li>
               <li>Project</li>
               <li>Review</li>
           </ul>
            </div>
        </div>
    )
}
export default Hambuger_menu;