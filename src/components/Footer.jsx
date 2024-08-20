import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
function Footer(){

        function handletoScrollup(){
            window.scrollTo({top:0,behavior:'smooth'})
        }
        const uparr=<FontAwesomeIcon icon={faArrowUp} />;
    return(

        <div style={{display:'flex',justifyContent:"space-around",alignItems:"center",borderTop:"2px solid"}}>
           <span>Develop By Tarun Thakur</span>
           <span className="contactbtn" onClick={()=>{handletoScrollup()}} style={{cursor:"pointer",padding:"2rem"}}>{uparr}</span>
        </div>
    )
}

export default Footer;