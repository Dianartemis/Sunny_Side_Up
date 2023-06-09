import React from "react";

// money images
import oneMillion from "./images/oneMillion.png";
import twoMillion from './images/twoMillion.png';
import threeMillion from './images/threeMillion.png';
import fourMillion from './images/fourMillion.png';
import fiveMillion from './images/fiveMillion.png';
import tenMillion from './images/tenMillion.png';

class Money extends React.Component {
    constructor(props) {
        super(props);
        this.state = {amount: props.amount, src: oneMillion, alt: ""};
        if (props.amount == 1) {
            this.state.src = oneMillion;
            this.state.alt = "One Million"
        }
        else if (props.amount == 2) {
            this.state.src = twoMillion;
            this.state.alt = "Two Million"
        }
        else if (props.amount == 3) {
            this.state.src = threeMillion;
            this.state.alt = "Three Million"
        }
        else if (props.amount == 4) {
            this.state.src = fourMillion;
            this.state.alt = "Four Million"
        }
        else if (props.amount == 5) {
            this.state.src = fiveMillion;
            this.state.alt = "Five Million"
        }
        else if (props.amount == 10) {
            this.state.src = tenMillion;
            this.state.alt = "Ten Million"
        }
    };
    
    handleMouseClick() {
        console.log("clicked");
    }

    render() {
        return (
            <div className="money">
                <img src={this.state.src} alt={this.state.alt}/>
                <button onClick={this.handleMouseClick}>Play Card</button> 
                <br />
            </div>
        )
    }
}

export default Money;