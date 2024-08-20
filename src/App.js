import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import axios from 'axios';
import AnimatedCursor from 'react-animated-cursor';
import React,{ useEffect, useState } from 'react';
import Services from './components/Services';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import About from './components/About';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import { Scrollbar } from 'react-scrollbars-custom';
import Footer from './components/Footer';

function App() {
  const [pdata, setPdata] = useState(null); // Corrected the useState function name to setPdata

  useEffect(() => {
    axios.get('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae')
      .then(response => {
        setPdata(response.data.user); 
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);  

  return (
    
    <div>
    
      <div className="App">
      <AnimatedCursor
      innerSize={10}
      outerSize={9}
      color='253,253,253'
      outerAlpha={0.8}
      innerScale={0.7}
      showSystemCursor="true"
      outerScale={8}
      outerStyle={{
        mixBlendMode: 'exclusion'
      }}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link',
        '.contactdetail',
        '.projectssec',
        'h1',
        'h2',
        '.name',
        {
          target: '.custom',
          options: {
            innerSize: 12,
            outerSize: 12,
            color: '150, 118, 79',
            outerAlpha: 0.3,
            innerScale: 0.7,
            outerScale: 5
          }
        }
      ]}

    />
      </div>
      {pdata && (
        <div>
          <Header name={pdata.about.name} />
          <Hero 
            title={pdata.about.title}
            subtitle={pdata.about.subTitle}
            img={pdata.about.avatar.url}
          />
          <div className='services' style={{ marginTop: "4rem", display: "flex", overflowX: "scroll" }}>
            {pdata.services.map(service => (
              <div key={service._id} style={{ margin: "1rem" }}>
                <Services
                  title={service.name}
                  imgurl={service.image.url}
                  desc={service.desc}
                  charge={service.charge}
                />
              </div>
            ))}
          </div>
          <About imgurl={pdata.about.avatar.url} skills={pdata.skills} data={pdata.about} />
          <div style={{ display: "flex",justifyContent:"space-between",alignItems:"center", margin: "3rem" }}>
            <h2>Let's Work Together On Your Next Project!</h2> 
            <button className='contactbtn cursor' style={{ width:"8rem",height:"3rem"}}>Hire me now <FontAwesomeIcon icon={faArrowRight} /></button>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", padding: "1.4%" }}>
            <h2 style={{  fontWeight: "bold" }}>MY Recent Work.</h2>
            {pdata.projects.map(project => (
              <Projects key={project._id} detail={project} />
            ))}
          </div>
          <div style={{ display: "flex", overflow: "hidden", justifyContent: "center" }}>
            <div className="marquee-container">
              <div style={{ display: "flex" }}>
                {pdata.testimonials.map(testimonial => (
                  <Testimonials key={testimonial._id} review={testimonial} />
                ))}
              </div>
            </div>
          </div>
          <Contact data={pdata.about} />
        
        </div>
      )}
          <Footer/>
    </div>
  );
}

export default App;
