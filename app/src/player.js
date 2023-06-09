import React from "react";

import Money from './money';
import Property from './property';
import Deck from './deck';
import Action from './action';

export default class Player extends React.Component{
    constructor(props) {
        super(props);
        this.state = {name: props.name, hand: [<Action type="passGo" />, <Action type="slyDeal" />], propertyOnTable: {"red": 1, "yellow": 0, "orange": 0, "lightGreen": 0, "darkGreen": 0, "lightBlue": 0, "darkBlue": 0, "pink": 0,  "brown": 0, "black": 0}, bank: {1: 1, 2:0, 3:0, 4:0, 5:0, 10:0}};
    };

    drawCard(deck, numCards) {
        for (let i = 0; i < numCards; i++) {
            this.hand.push(deck.draw());
        }
    }

    playCard(cardIndex, targetPlayer) {
        const card = this.hand[cardIndex];
        this.hand.splice(cardIndex, 1);
        targetPlayer.receiveCard(card);
    }

    displayMoney() {
        const content = [];
        for (let dollarValue of Object.keys(this.state.bank)) {            
            for (let i=0; i < this.state.bank[dollarValue]; i++ ) {
                content.push(<Money amount={dollarValue} />);
            }
        }
        return content;
    }

    displayPropertyOnTable() {
        const content = [];
        for (let color of Object.keys(this.state.propertyOnTable)) {
            for (let i=0; i < this.state.propertyOnTable[color]; i++) {
                content.push(<Property color={color} />);
            }
        }
        return content;
    }

    displayHand() {
        const content = [];
        for (let card in this.state.hand) {
            content.push(this.state.hand[card]);
        }
        console.log(content)
        return content;
    }

    render() {
        return (
            <>
                <div className="bank">
                    {this.displayMoney()}
                </div>
                <div className="propertyOnTable">
                    {this.displayPropertyOnTable()}
                </div>
                <div className="hand">
                    {this.displayHand()}
                </div>
            </>    
        )
    }
    
    // receiveCard(card) {
    //     this.hand.push(card);
    // }
}

