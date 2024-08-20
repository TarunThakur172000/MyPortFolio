import { useState,useRef,useEffect } from "react";
import '../App.css'
import VanillaTilt from "vanilla-tilt";
import mine from '../res/mine.jpg'

function About(props){
    const [state,setstate]=useState("about me");
    const imageRef = useRef(null);

    useEffect(() => {
        
        
        VanillaTilt.init(imageRef.current, {
            max: 5,
            speed: 100,
            glare: true,
            "max-glare": 0.5,
            reverse:"true"
        });

        return () => {
           
        };
    }, []);
    return(
        <div className="example">
            <div style={{display:"flex",justifyContent:"center",margin:"5rem"}}>
            <div style={{border:"2px solid",width:"50%",textAlign:"center",cursor:"pointer",backgroundColor:state==="about me"? "rgb(41 40 40)" :""}} onClick={()=>{setstate("about me")}}><p>About Me</p> </div>
            <div style={{border:"2px solid",width:"50%",textAlign:"center",cursor:"pointer",backgroundColor:state!=="about me"? "rgb(41 40 40)" :""}} onClick={()=>{setstate("skills")}}><p>Skills</p></div>
            </div>
           <div>
            { state == "about me" ? (
                <div  className="Aboutsec" style={{margin:"2rem"}}>
            <div style={{display:"flex",justifyContent:"center"}}>
                <img ref={imageRef} src={mine} style={{borderRadius:"2rem",boxShadow: "14px 8px 4rem #96764f"}}/>
            </div>
            <div>
                <h1>{props.data.subTitle}</h1>
                <p>I am a dedicated React developer with strong skills in JavaScript, currently expanding my knowledge in TypeScript. I am a quick learner and attentive listener, which enables me to collaborate effectively to create efficient and scalable solutions. My focus is on developing user-friendly applications that solve real-world problems. Through various projects, I have successfully delivered solutions such as an online compiler, a government organization website, and a traveling blog platform, showcasing my ability to innovate and adapt in diverse development environments.</p>
                <div> 
                    <div style={{display:"flex",width:"100%",justifyContent:"space-between"}}>
                    <span>
                        <p>Name</p>
                        <p>Tarun Thakur</p>
                    </span>
                    <span>
                        <p>Phone Number</p>
                        <p>+91-6397884147</p>
                    </span>
                    </div>
                    <div style={{display:"flex",width:"100%",justifyContent:"space-between"}}>
                    <span>
                        <p>Linkdin</p>
                        <p ><a href="https://www.linkedin.com/in/tarun-thakur/" >Tarun Thakur</a></p>
                    </span>
                    <span><p>Email Address</p>
                        <p>tarunt5555@gmail.com</p></span>
                    </div>
                    
                </div>
            </div>
           </div>
            ):
            (
                <div className="Aboutsec">
                <div>
                    {props.skills.reverse().map(skill=>(                  
                    <div className="skill">
                <h3 style={{fontSize:"15px"}}>{skill.name}</h3>
                 <div className="level" style={{padding:"0",width:"30rem",height:".5rem"}}>
                <div className="level-bar" style={{ width: `${skill.percentage}%` }}></div>
                </div>
                </div>
                ))}
                </div>

                <div style={{display:'flex',flexWrap:"wrap"}}>
                    {props.skills.map(skill=>(
                        <img src={skill.image.url} style={{width:"10rem",backgroundColor:"rgb(41, 40, 40)",borderRadius:"4px",margin:"1rem"}}/>
                    ))}
                </div>
               </div>
            )
        }
        </div>
        </div>
    )
}

export default About;