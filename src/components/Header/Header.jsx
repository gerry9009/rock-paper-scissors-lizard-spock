import React from 'react';
import './Header.css';

export default class Header extends React.Component {
    render() {
        return(
            <header>
                <ul className='header-headline'>
                    <li>ROCK</li>
                    <li>PAPER</li>
                    <li>SCISSORS</li>
                    <li>LIZARD</li>
                    <li>SPOCK</li>
                </ul>
                <div className='header-scores'>
                    <div className='header-score-player'>
                        <p>Player</p>
                        <p>{this.props.playerScore}</p>
                    </div>
                    <div className='header-score-player'>
                        <p>Computer</p>
                        <p>{this.props.computerScore}</p>
                    </div>
                </div>
            </header>
        )
    }
}