import { useState,useRef ,useEffect} from "react";
import img from '../res/cursor-image.png'
import VanillaTilt from "vanilla-tilt";


function Services(props) {
  const imageRef = useRef(null);
  useEffect(() => {
    VanillaTilt.init(imageRef.current, {
      max: 10,
      speed: 400,
      glare: true,
      'max-glare': 0.5,
      reverse: true
    });

    return () => {
      imageRef.current.vanillaTilt.destroy();
    };
  }, []);

  

  const img=props.imgurl;
  return (
    <div className="Services-Component" ref={imageRef}  style={{display:"flex"}}>
      <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
     <img src={props.imgurl} style={{width:"14rem"}} alt={props.title}/>
    </div>
    <div class="flip-card-back" >
    <div className="text-overlay"><h1 style={{fontSize:"1rem"}}>{props.title}</h1>
    <p>price  {props.charge}</p>
    <p>{props.desc}</p>
    </div>

    </div>
  </div>

</div>


      
    </div>
  );
}

export default Services;
