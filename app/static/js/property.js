class Property {
    constructor(color) {
        this.color = color;
        rent = this.determineRent(color);
    }

    determineRent(color) {
        if (color == "red") {
            rent = [2,3,6];
        }
        else if (color == "orange") {
            rent = [1,3,5];
        }
        else if (color == "yellow") {
            rent = [2,4,6];
        }
        else if (color == "light green") {
            rent = [1,2];
        }
        else if (color == "dark green") {
            rent = [2,4,7];
        }
        else if (color == "light blue") {
            rent = [1,2,3];
        }
        else if (color == "dark blue") {
            rent = [3,8];
        }
        else if (color == "pink") {
            rent = [1,2,4];
        }
        else if (color == "brown") {
            rent = [1,2];
        }
        else if (color == "black") {
            rent = [1,2,3,4];
        }
    }

    chargeRent(Player, dollars) {
        Player.subtractMoney(dollars);
        // assumes Player class exists and has function subtractMoney(dollars)
    }
}