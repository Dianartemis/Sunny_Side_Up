class Action {
    constructor(type) {
        this.type = type;
    }
    
    //rents, houses/hotels, sly deal, forced deal, deal breaker, debt collector, just say no, pass go, double the rent, it's my birthday
    performAction() {
        if (this.type == "sly deal") {

        }
    }

    checkWin(propertyOnTable) {
        propertyCounts = {};
        setCount = 0;
        
        propertyTwoSet = ["light green", "dark blue", "brown"];
        propertyFourSet = ["black"];

        // add properties to a map with the key being the color and the value being the number of properties with that color
        for (let card of propertyOnTable) {
        // for...of -> loop over values/elements
            propertyCounts[card.color]++;
        }

        for (let color in propertyCounts) {
        // for...in -> loop over indices/keys
            if (color in propertyTwoSet && propertyCounts[color]>=2){
                setCount++;
            }
            else if (color in propertyFourSet && propertyCounts[color]>=4){
                setCount++;
            }
            else if (propertyCounts[color]>=3){
                setCount++;
            }
        }
        return setCount>=3;
    }
}