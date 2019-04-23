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
    }
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

    return (
      <div>
        {images.map(image => <Image image={image.imgURL} key={image.id} imgClick={this.imgClick} imgId={image.id} />)}
        <div className="card text-center">
          <div className="card-header bg-primary text-white">
            Click Counter!
        </div>
          <div className="card-body">
            <p className="card-text">Click Count: {this.state.count}</p>
            <button className="btn btn-primary" onClick={this.handleIncrement}>
              Increment
          </button>{" "}
            <button className="btn btn-danger" onClick={this.handleDecrement}>
              Decrement
          </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
