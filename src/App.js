import React, { Component } from "react";
import "./App.css";
import Footer from "./components/Footer";
import chef from "./images/chef.png";
import butters from "./images/butters.png";
import cartmen from "./images/cartmen.png";
import garrison from "./images/garrison.png";
import ike from "./images/ike.png";
import jimmy from "./images/jimmy.png";
import kenny from "./images/kenny.png";
import kyle from "./images/kyle.png";
import nathan from "./images/nathan.png";
import PC from "./images/PC.png";
import stan from "./images/stan.png";
import token from "./images/token.png";
// import images from "./images.json";

let images = [
  {
    id: 1,
    path: chef,
    beenClicked: false
  },
  {
    id: 2,
    path: butters,
    beenClicked: false
  },
  {
    id: 3,
    path: cartmen,
    beenClicked: false
  },
  {
    id: 4,
    path: garrison,
    beenClicked: false
  },
  {
    id: 5,
    path: ike,
    beenClicked: false
  },
  {
    id: 6,
    path: jimmy,
    beenClicked: false
  },
  {
    id: 7,
    path: kenny,
    beenClicked: false
  },
  {
    id: 8,
    path: kyle,
    beenClicked: false
  },
  {
    id: 9,
    path: nathan,
    beenClicked: false
  },
  {
    id: 10,
    path: PC,
    beenClicked: false
  },
  {
    id: 11,
    path: stan,
    beenClicked: false
  },
  {
    id: 12,
    path: token,
    beenClicked: false
  }
];

class App extends Component {
  state = {
    score: 0,
    topScore: 0,
    message: "Click any image to begin!",
    images: images,
    clickedArray: []
  };

  // Function to handle clicked images and update score
  handleImageClick = event => {
    let currentId = event.target.alt;
    console.log(currentId);
    console.log(event.target);
    // Shuffle the images
    const shuffledArray = this.shuffleArray(images);
    this.setState({ images: shuffledArray });
    console.log("image clicked");

    // If image has already been clicked set this.state.score = 0, empty clickedArray
    if (this.state.clickedArray.includes(currentId)) {
      this.setState({
        score: 0,
        clickedArray: [],
        message: "Incorrect!! GAME OVER! Click another image to play again!"
      });
      // Else
    } else {
      this.setState({
        score: this.state.score + 1,
        // clickedArray: this.state.clickedArray.concat([images.id]),
        clickedArray: [...this.state.clickedArray, currentId],
        message: "Correct!!"
      });
    }
    // set topscore = score if score>topscore.
    if (this.state.score > this.state.topScore) {
      this.setState({ topScore: this.state.score });
    }
  };

  // Shuffle function
  shuffleArray = a => {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };

  render() {
    let displayImages = this.state.images.map(eachItem => (
      <img
        alt={eachItem.id}
        key={eachItem.id}
        src={eachItem.path}
        onClick={this.handleImageClick}
      />
    ));
    return (
      <div className="App">
        <nav className="navbar">
          <div className="brand">
            <a href="/">Clicky Game</a>
          </div>
          <div>{this.state.message}</div>
          <div>
            Score: {this.state.score} | Top Score: {this.state.topScore}
          </div>
        </nav>

        <header className="header">
          <h1>South Park Clicky Game!</h1>
          <h2>
            Click on an image to earn points, but don't click on any more than
            once!
          </h2>
        </header>

        <div className="img-container">
          <div className="images">{displayImages}</div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;
