import React from 'react';
import { Link } from 'react-router-dom';
import './Play.css';

import paper from '../../img/paper-hand.png';
import rock from '../../img/rock-hand.png';
import scissors from '../../img/scissors-hand.png';
import lizard from '../../img/lizard-hand.png';
import spock from '../../img/spock-hand.png';



export default class Play extends React.Component {
    state = {
        countDown : 3,
        winner : null,
        reason : "",
    }

    player = this.props.playerChoice;
    computer = this.props.computerChoice;

    timer = 0; // to catch the setInterval method with the clearInterval
    handleScore = true; // to avoid infinity loop in componentDidUpdate - getWinner method

    image = {
        "rock" : rock,
        "paper" : paper,
        "scissors" : scissors,
        "lizard" : lizard,
        "spock" : spock,
    } 

    componentDidMount() {
        if (this.timer === 0) {
            this.timer = setInterval( ()=>  this.setState( {countDown : (this.state.countDown -1) } ) , 1000 );
        }
    }

    componentDidUpdate() {
        if (this.state.countDown === 0) {
            clearInterval(this.timer);

            if (this.handleScore == true) {
                this.getWinner();
            }
        }
        
    }

//this method get the reason of the winner 
    getReason(winner) {
        const textReason = [
            ["rock", "crushes", "lizard"],
            ["rock", "crushes", "scissors"],
            ["paper", "disproves", "spock"],
            ["paper", "covers", "rock"],
            ["scissors", "decapitates", "lizard"],
            ["scissors", "cuts", "paper"],
            ["lizard", "poisons", "spock"],
            ["lizard", "eats", "paper"],
            ["spock",  "smashes", "scissors" ],
            ["spock",  "vaporizes", "rock" ],
        ];
            
        let message = [];
        
        if(winner === "player") {
            message = textReason.filter(
                arr => {
                    return arr[0] === this.player && arr[2] === this.computer
                }
            )
        } else {
            message = textReason.filter(
                arr => {
                    return arr[0] === this.computer && arr[2] === this.player
                }
            )
        }
        this.setState({
            // I used replaceAll() method - message.join(" ") - did not work
            reason : message.join().replaceAll(",", " ")
        })
    }

// this method evaluate the winner, 
// call getReason method and handleScores method from the App.jsx component, 
// in addition, modify this component state's winner element 
    getWinner() {
        this.handleScore = false;
        let won = "";

        const win = {
            "rock" : ["scissors", "lizard"],
            "paper" : ["rock", "spock"],
            "scissors" : ["paper", "lizard"],
            "lizard" : ["paper", "spock"],
            "spock" : [ "rock", "scissors" ],
        };

        if ( this.player === this.computer ) {
            won = "draw";
        } else if( win[this.player].includes(this.computer) ) {
            won = "player";
        } else {
            won = "computer";
        }

        this.props.handleScores(won);
        this.getReason(won);
        this.setState(
            {winner : won}
        );
    } 

    render() {
        const isRenderResult = this.state.countDown;
        let result;
        
        //this branch is displayed when the countdown is stopped
        if(isRenderResult == 0) {
            result = (
                <div className='player-result-container'>
                    <div className='player-result-img'>
                        <div className='player-result-choice'>
                            <h3 className='choice-title'>Player choice: </h3>
                            <img 
                                className={"game-img game-img-" + this.props.playerChoice} 
                                src={this.image[this.props.playerChoice]} 
                                alt={this.props.playerChoice}    
                            />
                            <h3 className='img-title'>{this.props.playerChoice}</h3>
                        </div>
                        <div className='player-result-choice'>
                            <h3 className='choice-title'>Computer choice: </h3>
                            <img 
                                className={"game-img game-img-" + this.props.computerChoice}
                                src={this.image[this.props.computerChoice]} 
                                alt={this.props.computerChoice}
                            />
                            <h3 className='img-title'>{this.props.computerChoice}</h3>
                        </div>
                    </div>   
                    <div className='play-result-scoreboard'>

                    {/*this condition depend on the winner element of this component's state*/}
                        { 
                            this.state.winner === "draw" ? 
                            <h3 className='scoreboard-title'>Draw</h3> :
                            <>
                                <p>The winner is:</p>
                                <h3 className='scoreboard-title'>{this.state.winner}</h3>
                                <p>because</p>
                                <p>{this.state.reason}</p>
                            </>
                        }
                    </div>               
                    <Link to="/" className='play-link'>
                        <p>New Game</p>
                    </Link>
                </div> 
    
            );

        //this branch is displayed while the countdown is running
        } else {
            result = (
            <div className='player-result-container'>
                <div className='player-result-img'>
                    <div className='player-result-choice'>
                        <h3 className='choice-title'>Player choice: </h3>
                        <img 
                            className={"game-img game-img-" + this.props.playerChoice} 
                            src={this.image[this.props.playerChoice]} 
                            alt={this.props.playerChoice}    
                        />
                        <h3 className='img-title'>{this.props.playerChoice}</h3> 
                    </div>  
                    <div className='player-result-choice'>
                        <h3 className='choice-title'>Computer choice: </h3>
                        <div className='game-img player-result-countdown'>
                            <p>{this.state.countDown}</p>
                        </div> 
                        <h3 className='img-title'>...</h3>                                
                    </div>
                </div>               
            </div>
            );
        }
        
        return (      
            <div>
                {result}              
            </div>
        )
    }
}