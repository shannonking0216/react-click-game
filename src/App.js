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

  recordClickedImages = () => {
    console.log(images.id);
    // When img is clicked, record value of 'id' (from image objects in const images array) into clickedImages[].
    // update the state of clickedImages[] 
  
    // this.setState({ clickedImages: this.state.clickedImages + images.id });
  };

  //onClick do this: Compare id of new click to all ids recorded in clickedImages[]:
  
  //if id of newCLick === any id in clickedImages[] 
  //then Score resets to 0. 
  // High score is reset. 
  // Game re-starts. 
  // clickedImages[] state is reset to empty array.
  // Images shuffle randomly. 


  //if id of newCLick !=== any id in clickedImages[] 
  //then Score increments by 1. 
  // id is added to clickedImages[]. 
  // Images shuffle randomly. 


  imgClick = (id) => {
    console.log(id);
  };

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
          <div className="img-container" onClick={this.handleIncrement.imgClick} onClick={this.recordClickedImages.imgClick} >

            {images.map(image => <Image image={image.imgURL} key={image.id} imgClick={this.imgClick} imgId={image.id} />)}

          </div>
        </div>
      </div>
    );
  }
}

export default App;
