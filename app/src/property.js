import React from "react"

// property images
import redProperty from './images/redProperty.png'
import orangeProperty from './images/orangeProperty.png'
import yellowProperty from './images/yellowProperty.png'
import lightGreenProperty from './images/lightGreenProperty.png'
import darkGreenProperty from './images/darkGreenProperty.png'
import lightBlueProperty from './images/lightBlueProperty.png'
import darkBlueProperty from './images/darkBlueProperty.png'
import pinkProperty from './images/pinkProperty.png'
import brownProperty from './images/brownProperty.png'
import blackProperty from './images/blackProperty.png'

class Property extends React.Component {
    constructor(props) {
        super(props)
        this.state = {color: props.color, src: "", rent: [], alt: ""}

        if (this.state.color == "red") {
            this.state.rent = [2,3,6];
            this.state.src = redProperty
            this.state.alt = "Red Property"
        }
        else if (this.state.color == "orange") {
            this.state.rent = [1,3,5];
            this.state.src = orangeProperty
            this.state.alt = "Orange Property"
        }
        else if (this.state.color == "yellow") {
            this.state.rent = [2,4,6];
            this.state.src = yellowProperty
            this.state.alt = "Yellow Property"
        }
        else if (this.state.color == "lightGreen") {
            this.state.rent = [1,2];
            this.state.src = lightGreenProperty
            this.state.alt = "Light Green Property"
        }
        else if (this.state.color == "darkGreen") {
            this.state.rent = [2,4,7];
            this.state.src = darkGreenProperty
            this.state.alt = "Dark Green Property"
        }
        else if (this.state.color == "lightBlue") {
            this.state.rent = [1,2,3];
            this.state.src = lightBlueProperty
            this.state.alt = "Light Blue Property"
        }
        else if (this.state.color == "darkBlue") {
            this.state.rent = [3,8];
            this.state.src = darkBlueProperty
            this.state.alt = "Dark Blue Property"
        }
        else if (this.state.color == "pink") {
            this.state.rent = [1,2,4];
            this.state.src = pinkProperty
            this.state.alt = "Pink Property"
        }
        else if (this.state.color == "brown") {
            this.state.rent = [1,2];
            this.state.src = brownProperty
            this.state.alt = "Brown Property"
        }
        else if (this.state.color == "black") {
            this.state.rent = [1,2,3,4];
            this.state.src = blackProperty
            this.state.alt = "Black Property"
        }
    }

    chargeRent(Player, dollars) {
        Player.subtractMoney(dollars);
        // assumes Player class exists and has function subtractMoney(dollars)
    }

    handleMouseClick() {
        console.log("clicked");
    }

    render() {
        return(
            <div className="property">
                <img src={this.state.src} alt={this.state.alt} />
                <button onClick={this.handleMouseClick}>Play Card</button> 
                <br />
            </div>
        )
    }
}

export default Property