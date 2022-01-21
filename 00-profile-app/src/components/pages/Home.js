import React from 'react';
import ImageComp from '../../components/imageComp'
import "../stylessheets.css";
import Me from "../pages/images/me.jpg";


export default function Home() {
  return (
    <div>
      <div>
      
        <h1 className="brand">Joe Maneira</h1>
        
        <div className="home-container">

          <ImageComp />
          
          <img className="me"src={Me} width='15%' height="45%"  ></img>
          <p className='about-me'>
            Hi! I'm Joseph D. Maneira but I go by Joe. I came from a construction management background and it allowed me to use my creativity,but at some point I started feeling like it was so limiting creatively.Then I saw what you could do as a web developer, the unlimited creativity was alluring and I wanted to do what ever it took to get my foot into the industry so I decided to Sign up for the Rutgers
            Bootcamp.
          </p>
        </div>
      </div>
    </div>
  );
} 
