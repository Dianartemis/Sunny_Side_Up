import React from "react"

class Deck extends React.Component{
    constructor(props) {
        super(props);
        this.state = {cards: []}
        this.createDeck();
        this.shuffleDeck();
    }
    
    createDeck() {
        // money cards
        for (let i=0; i<6; i++) {
            this.addCard(Money(1));
        }
        for (let i=0; i<5; i++) {
            this.addCard(Money(2));
        }
        for (let i=0; i<3; i++) {
            this.addCard(Money(3));
            this.addCard(Money(4));
        }
        for (let i=0; i<2; i++) {
            this.addCard(Money(5));
        }
        this.addCard(Money(10));
        
        // property cards
        for (let i=0; i<3; i++) {
            this.addCard(Property("red"));
            this.addCard(Property("orange"));
            this.addCard(Property("yellow"));
            this.addCard(Property("dark green"));
            this.addCard(Property("light blue"));
            this.addCard(Property("pink"));
        }
        for (let i=0; i<2; i++) {
            this.addCard(Property("light green"));
            this.addCard(Property("dark blue"));
            this.addCard(Property("brown"));
        }
        for (let i=0; i<4; i++) {
            this.addCard(Property("black"));
        }
        
        // action cards
        
    }

    addCard(card) {
        this.state.cards.push(card);
    }
    
    shuffleDeck(cards) {
        const shuffledDeck = [...cards];
        for (let i = 0; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledDeck[i], shuffledDeck[j]] = [shuffledDeck[j], shuffledDeck[i]];
        }
        return shuffledDeck;
    }

    draw(Player) {
        if (this.cards.length <= 0) {
            this.createDeck()
            this.shuffleDeck()
            // throw new Error("Empty Deck!");
        }
        Player.state.hand.push(this.state.cards[0])
        Player.state.hand.push(this.state.cards[1])
    }
}

export default Deck