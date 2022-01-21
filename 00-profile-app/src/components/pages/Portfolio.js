import React from 'react';
import project1 from "../pages/images/mrpassword.png";
import "../pages/Portfolio.css";
import ImageComp from '../../components/imageComp'
import project2 from "../pages/images/notetaker.png";
import project3 from "../pages/images/pokeFinder.png"
import project4 from "../pages/images/hypo.png";

export default function Portfolio() {
  return (
    <div>
      <h1 className="brand">Portfolio</h1>
      <div>
        <ImageComp />

        <a className='project1'
          href="https://maneira3232.github.io/Mr.Pass-Word/">
          <img src={project1} width='25%' height="25%" ></img>
          <h2>Mr.Password</h2>
        </a>
      </div>
      <div>
        <a className='project2'
          href="https://maneira3232.github.io/Notetaker/">
          <img src={project2} width='25%' height="25%" ></img>
          <h2>Note-Taker</h2>
        </a>
        </div>;

        <div>
        <a className='project3'
          href="https://bchen41.github.io/PokeFinder/">
          <img src={project3} width='25%' height="25%" ></img>
          <h2>PokeFinder</h2>
        </a>
      </div>
      <div>
        <a className='project4'
          href="https://auction-pandemic-essentials.herokuapp.com/login">
          <img src={project4} width='25%' height="25%" ></img>
          <h2>Pandemic-Auction</h2>
        </a>
        </div>;
       

        
      </div>
      );
}
