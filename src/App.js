import React from 'react';
import './App.css';
import Image from './Image.js';

const images =
  [
    {
      id: 1,
      imgURL: "url('https://clicky-game.netlify.com/assets/images/goldenford.png')"
    },
    {
      id: 2,
      imgURL: "url('https://clicky-game.netlify.com/assets/images/birdperson.png')"
    },
    {
      id: 3,
      imgURL: "url('https://clicky-game.netlify.com/assets/images/jerry.png')"
    },
    {
      id: 4,
      imgURL: "url('https://clicky-game.netlify.com/assets/images/beth.png')"
    },
    {
      id: 5,
      imgURL: "url('https://clicky-game.netlify.com/assets/images/gianthead.png')"
    },
    {
      id: 6,
      imgURL: "url('https://clicky-game.netlify.com/assets/images/summer.png')"
    },
    {
      id: 7,
      imgURL: "url('https://clicky-game.netlify.com/assets/images/meeseeks.png')"
    },
    {
      id: 8,
      imgURL: "url('https://clicky-game.netlify.com/assets/images/mr.png')"
    },
    {
      id: 9,
      imgURL: "url('https://clicky-game.netlify.com/assets/images/evilmorty.png')"
    },
    {
      id: 10,
      imgURL: "url('https://clicky-game.netlify.com/assets/images/rick.png')"
    },
    {
      id: 11,
      imgURL: "url('https://clicky-game.netlify.com/assets/images/jessica.png')"
    },
    {
      id: 12,
      imgURL: "url('https://clicky-game.netlify.com/assets/images/morty.png')"
    },
  ];


class App extends React.Component {

  state = {
    count: 0,
    clickedImages: []
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  imgClick = (id) => {
    console.log(id);
  };

  render() {

    let score = "score";
    let topScore = "topScore";

    return (
      <div>
        <ul className="nav">
          <li>
            CLICKY GAME
          </li>
          <li>
            CLick an image to begin!
          </li>
          <li>
            `Score: ${score} || Top Score: ${topScore}`
          </li>
        </ul>
        
        <h1>RICK and MORTY CLICKY-MEMORY GAME</h1>
        <h2>Click on an image to earn points, but don't click any more than once!</h2>

        <div className="card">
          <div className="img-container" onClick={this.handleIncrement}>
              {images.map(image => <Image image={image.imgURL} key={image.id} imgClick={this.imgClick} imgId={image.id} />)}
      
          </div>

          Score: {this.state.count}
        

        </div>
      </div>
    );
  }
}

export default App;
