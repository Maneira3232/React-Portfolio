import React, { Component } from 'react';
import '../stylessheets.css';
import project1 from '../components/pages/images/mr.passwords.png'


class App extends Component {
  render() {
    return (

      <div className="card">
        <img className="project1" src={project1} alt="Cocktail"></img>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>

    );
  }
}

export default App;