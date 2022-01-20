import React from 'react';
// import backimage from "../pages/images/backgroundprofile.jpg";
import project1 from "../pages/images/mrpassword.png";
import "../pages/Portfolio.css";

export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio</h1>
      {/* <img className="backgroundpic"src={backimage }></img> */}

      <a className='project1'
          href="https://maneira3232.github.io/Mr.Pass-Word/">
          <img src={project1} width='40%' height="40%" ></img>
        </a>


      
    </div>
  );
}
