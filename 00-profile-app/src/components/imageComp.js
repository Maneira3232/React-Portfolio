import React from 'react';
import backimage from "../components/pages/images/backgroundprofile.jpg";
import '../components/stylessheets.css'

const imageComp = () => {
  return <div>
      <img className="backgroundpic"src={backimage }>
       </img>
  </div>;
};

export default imageComp;
