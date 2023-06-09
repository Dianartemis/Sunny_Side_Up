import React from "react"

//action images
import slyDeal from './images/slyDeal.png'
import allRent from './images/allRent.png'
import forcedDeal from './images/forcedDeal.png'
import dealBreaker from './images/dealBreaker.png'
import justSayNo from './images/justSayNo.png'
import passGo from './images/passGo.png'
import doubleTheRent from './images/doubleTheRent.png'
import birthday from './images/birthday.png'
import debtCollector from './images/debtCollector.png'

// other js files
import Deck from './deck'
import Player from './player'

class Action extends React.Component{
    constructor(props) {
        super(props)
        this.state = {type: props.type, src: "", alt: ""}

        if (props.type == "allRent") {
            this.state.src = allRent;
            this.state.alt = "allRent";
        }
        else if (props.type == "forcedDeal") {
            this.state.src = forcedDeal;
            this.state.alt = "forcedDeal";
        }
        else if (props.type == "dealBreaker") {
            this.state.src = dealBreaker;
            this.state.alt = "dealBreaker";
        }
        else if (props.type == "justSayNo") {
            this.state.src = justSayNo;
            this.state.alt = "justSayNo";
        }
        else if (props.type == "passGo") {
            this.state.src = passGo;
            this.state.alt = "passGo";
        }
        else if (props.type == "doubleTheRent") {
            this.state.src = doubleTheRent;
            this.state.alt = "doubleTheRent";
        }
        else if (props.type == "birthday") {
            this.state.src = birthday;
            this.state.alt = "birthday";
        }
        else if (props.type == "debtCollector") {
            this.state.src = debtCollector;
            this.state.alt = "debtCollector";
        }
        else if (props.type == "slyDeal") {
            this.state.src = slyDeal;
            this.state.alt = "slyDeal";
        }
        console.log(props.type)
        console.log(this.state.src)
    }
    
    //rents, houses/hotels, sly deal, forced deal, deal breaker, debt collector, just say no, pass go, double the rent, it's my birthday
    performAction(Player) {
        if (this.type == "passGo") {
            Deck.draw(Player);
        }
    }

    // checkWin(propertyOnTable) {
    //     propertyCounts = {};
    //     setCount = 0;
        
    //     propertyTwoSet = ["light green", "dark blue", "brown"];
    //     propertyFourSet = ["black"];

    //     // add properties to a map with the key being the color and the value being the number of properties with that color
    //     for (let card of propertyOnTable) {
    //     // for...of -> loop over values/elements
    //         propertyCounts[card.color]++;
    //     }

    //     for (let color in propertyCounts) {
    //     // for...in -> loop over indices/keys
    //         if (color in propertyTwoSet && propertyCounts[color]>=2){
    //             setCount++;
    //         }
    //         else if (color in propertyFourSet && propertyCounts[color]>=4){
    //             setCount++;
    //         }
    //         else if (propertyCounts[color]>=3){
    //             setCount++;
    //         }
    //     }
    //     return setCount>=3;
    // }

    handleMouseClick() {
        console.log("clicked");
    }

    render() {
        return(
            <div className="action">
                <img src={this.state.src} alt={this.state.alt} />
                <button onClick={this.handleMouseClick}>Play Card</button> 
                <br />
            </div>
        )
    }
}

export default Action;