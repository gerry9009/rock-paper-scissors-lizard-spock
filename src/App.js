import React from 'react';
//import App style
import './App.css';
// Import components
import Header from './components/Header/Header';
import Play from './components/Play/Play';
import Game from './components/Game/Game';
import Footer from './components/Footer/Footer';
//import react-router-dom
import { HashRouter as Router, Route, Routes, } from 'react-router-dom';

class App extends React.Component {
  state = {
    playerScore : 0,
    computerScore : 0,
    playerChoice : null,
    computerChoice : null
  }

  handleChoices = (playerChoice) => {
    const choices = ["rock", "paper", "scissors", "lizard", "spock"];
    const computerChoice = choices[ Math.floor(Math.random() * 5) ]; 
    this.setState( 
      {
        playerChoice : playerChoice, 
        computerChoice : computerChoice,
      }
    );
  } 

  handleScores = (winner) => {
    if (winner === "draw") {return};
    winner == "player" ? 
    this.setState({
      playerScore : (this.state.playerScore + 1)
    }) :
    this.setState({
      computerScore : (this.state.computerScore + 1)
    })
  }

  render() {
    return (
      <div className="App">
          <Header playerScore={this.state.playerScore} computerScore={this.state.computerScore}/>
          <Router>
            <Routes>
              <Route path="/" element={ <Game handleChoices={this.handleChoices}/> } />
              <Route path="/play" element={ <Play playerChoice={this.state.playerChoice} computerChoice={this.state.computerChoice} handleScores={this.handleScores}/> } 
              /> 
            </Routes>
          </Router>
          <Footer />
      </div>
    );
  }
}

export default App;
