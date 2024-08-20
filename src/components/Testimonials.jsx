import '../App.css'
function Testimonials(props) {
    return (
      <div>
       <div  style={{display:"flex",justifyContent:"center"}}  className="marquee-content">
        <div className="testimonial">
      <img className="testimonial-image" src={props.review.image.url} alt={props.review.image.name} />
      <div className="testimonial-content">
        <h3 className="testimonial-name">{props.review.name}</h3>
        <p className="testimonial-review">{props.review.review}</p>
      </div>
    </div>
    </div>
    </div>
        
    );
}

export default Testimonials;
