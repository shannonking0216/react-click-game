import React from 'react';
import './App.css';
import Image from './Image.js';

const images =
  [
    {
      id: 1,
      imgURL: "https://clicky-game.netlify.com/assets/images/goldenford.png",
      clicked: false
    },
    {
      id: 2,
      imgURL: "https://clicky-game.netlify.com/assets/images/birdperson.png",
      clicked: false
    },
    {
      id: 3,
      imgURL: "https://clicky-game.netlify.com/assets/images/jerry.png",
      clicked: false
    },
    {
      id: 4,
      imgURL: "https://clicky-game.netlify.com/assets/images/beth.png",
      clicked: false
    },
    {
      id: 5,
      imgURL: "https://clicky-game.netlify.com/assets/images/gianthead.png",
      clicked: false
    },
    {
      id: 6,
      imgURL: "https://clicky-game.netlify.com/assets/images/summer.png",
      clicked: false
    },
    {
      id: 7,
      imgURL: "https://clicky-game.netlify.com/assets/images/meeseeks.png",
      clicked: false
    },
    {
      id: 8,
      imgURL: "https://clicky-game.netlify.com/assets/images/mr.png",
      clicked: false
    },
    {
      id: 9,
      imgURL: "https://clicky-game.netlify.com/assets/images/evilmorty.png",
      clicked: false
    },
    {
      id: 10,
      imgURL: "https://clicky-game.netlify.com/assets/images/rick.png",
      clicked: false
    },
    {
      id: 11,
      imgURL: "https://clicky-game.netlify.com/assets/images/jessica.png",
      clicked: false
    },
    {
      id: 12,
      imgURL: "https://clicky-game.netlify.com/assets/images/morty.png",
      clicked: false
    }
  ];

class App extends React.Component {

  state = {
    count: 0,
    topScore: 0,
    images: images
  };

  // function shuffle (images) {
  //   for (let i = images.length - 1; i > 0; i--) {
  //     const j = Math.floor(Math.random() * (i + 1));
  //     [images[i], images[j]] = [images[j], images[i]];
  //   }
  //   return images;
  // }

  handleClick = (clicked) => {
    console.log(clicked);
    // this.setState({ clicked: this.state.true});
    // shuffle();
  };

// if state of clicked is false, 
// then
// state of clicked changes from false to true
//score increments by 1


// else if state of clicked is true
// then 
// score resets to 0
// user looses
// high score is reset
// game restarts


handleIncrement = () => {
  this.setState({ count: this.state.count + 1 });
};

render() {
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
          Score: {this.state.count}|| Top Score: {this.state.count}
        </li>
      </ul>

      <h1>React Clicky Game</h1>
      <h2>RICK and MORTY!</h2>
      <h3>Click on an image to earn points, but don't click any more than once!</h3>

      <div className="card">
        <div className="img-container" onClick={this.handleClick} >
          <ul>
            {this.state.images.map(image => (
              <Image
                image={image.imgURL}
                key={image.id}
                handleClick={this.handleClick}
                imgId={image.id}
                clicked={image.clicked}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
}

export default App;
