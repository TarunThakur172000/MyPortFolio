import  { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import mine from '../res/mine.jpg'
import Typewriter from 'typewriter-effect';
function Hero(props) {
    const element = <FontAwesomeIcon icon={faArrowRight} />;
    const imageRef = useRef(null);

    useEffect(() => {
        VanillaTilt.init(imageRef.current, {
            max: 10,
            speed: 400,
            glare: true,
            "max-glare": 0.5,
            reverse:"true"
        });

        return () => {
            imageRef.current.vanillaTilt.destroy();
        };
    }, []);

    

  

    return (
        <div style={{ display: "flex", justifyContent: "center" ,margin:"3rem",paddingTop:"4rem"}}>
            
            <div style={{ width: "50rem", padding: "0", margin: "auto", display: "flex", justifyContent: "center" }}>
                <div>
                <h1> 
                    <Typewriter
                
  options={{
    strings: ['WordPress: Web Devlopment', 'Mern: Development'],
    autoStart: true,
    
    loop: true,
    cursor:"_"
  }}
/></h1>
                    <div style={{ display: "flex", }}>
                        <button className="contactbtn" style={{ marginRight: "2rem" ,width:"8rem",height:"3rem"}}>Contact {element}</button>
                        <p>{props.subtitle}</p>
                    </div>
                </div>
            </div>
            <div style={{ width: "50rem", padding: "0", margin: "auto", display: "flex", justifyContent: "center" }}>
                <img ref={imageRef} src={mine} style={{ width: "40%", borderRadius: "9rem", boxShadow: "14px 8px 4rem #96764f" }} alt="hero-image" />
            </div>
        </div>
    );
}

export default Hero;
