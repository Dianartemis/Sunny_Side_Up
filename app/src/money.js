import React from "react"

class Money extends React.Component {
    constructor(props) {
        super(props);
        this.state = {amount: props.amount, color: ""};
        if (props.amount == 1) {
            this.state.color = "#f5ecb1"
        }
        else if (props.amount == 2) {
            this.state.color = "#ebcab5"
        }
        else if (props.amount == 3) {
            this.state.color = "#dfdebe"
        }
        else if (props.amount == 4) {
            this.state.color = "#b7ccd9"
        }
        else if (props.amount == 5) {
            this.state.color = "#a486ac"
        }
        else if (props.amount == 10) {
            this.state.color = "#ebb850"
        }
    };
    
    handleMouseClick() {
        console.log("clicked");
    }

    render() {
        return (
            <div className="money" style="background-color:{this.state.color}">
                <h1>{this.state.amount}</h1>
                <button onClick={this.handleMouseClick}>Play Card</button> 
            </div>
        )
    }
}

export default Money