import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Hambuger_menu from './Hamburger_menu';

function Header(props){
    
const element = <FontAwesomeIcon icon={faArrowRight} className="iconarrow"/>
const firstNamePattern = /^[A-Za-z'-]+/;
const firstNameMatch = `Tarun Thakur`.match(firstNamePattern);



    return(
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",position:"fixed",right:"0",zIndex:"1",background:"black",top:"0"}}>
            <div className="header-nav-main"  style={{borderBottom:"1px solid white",height:"6rem"}}>
               
                
                <div className="center cursor header-left">
                <div className="center cursor name" style={{fontSize:"40px"}}><p>{firstNameMatch}.</p></div>
                <div className='cntbutn'> <button className="contactbtn " style={{width:"8rem",height:"3rem"}}>Contact {element} </button> </div>
                 </div>
                    <Hambuger_menu/>
            </div>
            
        </div>
    )
}

export default Header;