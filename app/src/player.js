import React from "react"
import Money from './money'

export default class Player extends React.Component{
    constructor(props) {
        super(props)
        this.state = {name: props.name, hand: [], propertyOnTable: [], bank: {1: 1, 2:3, 3:1, 4:2, 5:1, 10:1}}
        // propertyOnTable is a 1D array with all of the property the player puts down
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
                content.push(<Money amount={dollarValue} />)
            }
        }
        return content;
    }

    render() {
        return (
            <>
                <div className="bank">
                    <p>{this.displayMoney()}</p>
                </div>
            </>    
        )
    }
    
    // receiveCard(card) {
    //     this.hand.push(card);
    // }
}

// export class Deck extends React.Component{
//     constructor() {
//         this.cards = [];
//         this.createDeck();
//         this.shuffleDeck();
//     }
    
//     createDeck() {
//         // money cards
//         for (let i=0; i<6; i++) {
//             this.addCard(Money(1));
//         }
//         for (let i=0; i<5; i++) {
//             this.addCard(Money(2));
//         }
//         for (let i=0; i<3; i++) {
//             this.addCard(Money(3));
//             this.addCard(Money(4));
//         }
//         for (let i=0; i<2; i++) {
//             this.addCard(Money(5));
//         }
//         this.addCard(Money(10));
        
//         // property cards
//         for (let i=0; i<3; i++) {
//             this.addCard(Property("red"));
//             this.addCard(Property("orange"));
//             this.addCard(Property("yellow"));
//             this.addCard(Property("dark green"));
//             this.addCard(Property("light blue"));
//             this.addCard(Property("pink"));
//         }
//         for (let i=0; i<2; i++) {
//             this.addCard(Property("light green"));
//             this.addCard(Property("dark blue"));
//             this.addCard(Property("brown"));
//         }
//         for (let i=0; i<4; i++) {
//             this.addCard(Property("black"));
//         }
        
//         // action cards
        
//     }

//     addCard(card) {
//         this.cards.push(card);
//     }
    
//     shuffleDeck(cards) {
//         const shuffledDeck = [...cards];
//         for (let i = 0; i > 0; i--) {
//             const j = Math.floor(Math.random() * (i + 1));
//             [shuffledDeck[i], shuffledDeck[j]] = [shuffledDeck[j], shuffledDeck[i]];
//         }
//         return shuffledDeck;
//     }

//     draw() {
//         if (this.cards.length <= 0) {
//             throw new Error("Empty Deck!");
//         }
//         const randomIndex = Math.floor(Math.random() * this.cards.length);
//         return this.cards.splice(randomIndex, 1)[0];
//     }
// }