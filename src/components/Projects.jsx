import '../Project.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function Projects(props){

    const github=<FontAwesomeIcon icon={faGithub} />;

    return(
      <div className="projectssec">
       <div className='card-banner' style={{height:"12rem"}}>
        <img src={props.detail.image.url} />
        <a className='viewcodebtn contactbtn' style={{backgroundColor:"rgb(41, 40, 40)"}}>
          <span>View Code</span>
          <span>{github}</span>
        </a>
       </div>
       
       
        
        <div>
        <h2><a>{props.detail.title}</a></h2>
        
        </div>
        
      </div>
    )
}
export default Projects