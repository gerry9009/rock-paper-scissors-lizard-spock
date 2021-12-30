import React from "react";
import "./Footer.css";
import rules from '../../img/rules.png';

//TODO make a popup window where will show the rules

export default class Footer extends React.Component {
    handlePopup() {
        document.querySelector(".js-popup").classList.toggle("footer-popup-hidden");
    }

    render() {
        return (
        <footer>
            <button className="footer-btn" onClick={this.handlePopup}>Rules</button>
            <div className="footer-popup footer-popup-hidden js-popup" onClick={this.handlePopup}>
                <div className="popup-container">
                    <img className="popup-img" src={rules} alt="rules" onClick={this.handlePopup}/>
                    <div className="popup-exit"></div>
                </div>
            </div>
        </footer>
        );
    }
}