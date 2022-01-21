import React from 'react';
import ImageComp from '../../components/imageComp'
import pokeball from "../pages/images/pokeball.png";
export default function Resume() {
  return (
    
      <div>
      <h1 className="brand">Resume</h1>
      <div>
        <ImageComp />
        <a className='pokeball'
          href="file:///C:/Users/Joe%20Maneira/Downloads/Joseph%20D.%20Maneira%20Resume%202021%20(1).pdf">
          <img src={pokeball} width='25%' height="25%" ></img>
          
          
        </a>
      </div>
      
      
    </div>
  );
}
