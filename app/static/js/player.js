class Player {
    constructor(name) {
        this.name = name;
        this.hand = [];
        this.propertyOnTable = [] // a 1D array with all of the property the player puts down
        this.bank = {1: 0, 2:0, 3:0, 4:0, 5:0, 10:0}
    }

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

    // receiveCard(card) {
    //     this.hand.push(card);
    // }
}

class Deck {
    constructor() {
        this.cards = [];
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
        this.cards.push(card);
    }
    
    shuffleDeck(cards) {
        const shuffledDeck = [...cards];
        for (let i = 0; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledDeck[i], shuffledDeck[j]] = [shuffledDeck[j], shuffledDeck[i]];
        }
        return shuffledDeck;
    }

    draw() {
        if (this.cards.length <= 0) {
            throw new Error("Empty Deck!");
        }
        const randomIndex = Math.floor(Math.random() * this.cards.length);
        return this.cards.splice(randomIndex, 1)[0];
    }
}