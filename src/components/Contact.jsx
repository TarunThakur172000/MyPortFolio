import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import '../App.css';

function Contact(props) {
    const location = <FontAwesomeIcon icon={faLocationDot}  style={{height:"3rem"}}/>;
    const phone = <FontAwesomeIcon icon={faLinkedinIn} style={{height:"3rem"}}/>;
    const Email = <FontAwesomeIcon icon={faEnvelope} style={{height:"3rem"}}/>;
    
    return (
        <div style={{marginTop:"5rem"}}>
            <div className="footer-contact" style={{ display: "flex",justifyContent:"center",textAlign:"center" }}>
                <form>
                    <div className="formdata">
                        <input type="text" placeholder="Name" required />
                    </div>
                    <div className="formdata">
                        <input type="text" placeholder="Email" required />
                    </div>
                    <div className="formdata">
                        <textarea placeholder="Message" required></textarea>
                    </div>
                    <div>
                        <button className="btn" style={{border:"2px solid #96764f",padding:".4rem",width:"10rem",cursor:"pointer",borderRadius:".8rem" ,backgroundColor:"black",color:"#96764f"}}>Send Message</button>
                    </div>
                </form>
                <div className="cont">
                <div className="contactdetail">
                <div style={{ width: "10rem" }}>{location}</div>
                <p>-</p>
                </div>
                <div className="contactdetail">
                <div style={{ width: "10rem" }}>{phone}</div>
                <p ><a href="https://www.linkedin.com/in/tarun-thakur/" target="_blank">Tarun Thakur</a></p>
                </div>
                <div className="contactdetail">
                <div style={{ width: "10rem" }}>{Email}</div>
                <p>tarunt5555@gmail.com</p>
                </div>
                
                </div>
            </div>
        </div>
    );
}

export default Contact;
