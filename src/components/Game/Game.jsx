
import React from 'react';
import paper from '../../img/paper-hand.png';
import rock from '../../img/rock-hand.png';
import scissors from '../../img/scissors-hand.png';
import lizard from '../../img/lizard-hand.png';
import spock from '../../img/spock-hand.png';

import './Game.css';
import { Link } from 'react-router-dom';

export default class Game extends React.Component {
    handleClick = (e) => {
        this.props.handleChoices(e.currentTarget.dataset.id);
    }

    render() {
        return (
                <div className='game-container'>
                    <Link to="/play" className='img-link'>
                        <div className="img-container" data-id="rock" onClick={ this.handleClick } >  
                            <img
                                    className='game-img game-img-rock'             
                                    src={rock} 
                                    alt="rock"
                            />
                            <h3 className='img-title'>Rock</h3>
                        </div>               
                    </Link>
                    <Link to="/play" className='img-link'>
                        <div className="img-container" data-id="paper" onClick={ this.handleClick } >
                            <img
                                className='game-img game-img-paper'       
                                src={paper} 
                                alt="paper"
                            />
                            <h3 className='img-title'>Paper</h3>
                        </div>
                    </Link>
                    <Link to="/play" className='img-link'>
                        <div className="img-container" data-id="scissors" onClick={ this.handleClick } >
                            <img
                                className='game-img game-img-scissors' 
                                src={scissors} 
                                alt="scissors"
                            />
                            <h3 className='img-title'>Scissors</h3>           
                        </div>
                    </Link>
                    <Link to="/play" className='img-link'>
                        <div className="img-container" data-id="lizard" onClick={ this.handleClick } >
                            <img
                                className='game-img game-img-lizard'  
                                src={lizard} 
                                alt="lizard" 
                            />   
                            <h3 className='img-title'>Lizard</h3>      
                        </div>
                    </Link>
                    <Link to="/play" className='img-link'>
                        <div className="img-container" data-id="spock" onClick={ this.handleClick } >
                            <img
                                className='game-img game-img-spock'  
                                src={spock}  
                                alt="spock"
                            />
                            <h3 className='img-title'>Spoke</h3>
                        </div>
                    </Link>
                </div>
        )
    }
}

