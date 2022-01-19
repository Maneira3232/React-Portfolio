import React from 'react';
import backimage from "../pages/images/backgroundprofile.jpg";
import "../stylessheets.css";

export default function Home() {
  return (
    <div>
      <h1 className="brand">Joe Maneira</h1>
      <img className="backgroundpic"src={backimage }></img>
      
    </div>
    
  );
} 
