class Ducktypium {
    constructor(color){
        this.color = color;
        
        this.validColors = ['red', 'yellow', 'blue'];

        this.checkColors = function(c) {
            if (this.validColors.indexOf(c) < 0) {
                throw 'Red, yellow, or blue only.'
            }
        };

        this.checkColors(this.color);
        
        console.log('Initial color: ' + this.color + '.')

        this.calibrationSequence = [];
    }

    refract(refractColor) {
        console.log('Refract color: ' + refractColor + '.')

        this.checkColors(refractColor);
        
        let res;

        if (refractColor == this.color) {
            res = refractColor;
        } else {
            let colors = [refractColor, this.color]
            colors.sort();
            switch (colors[0]+' '+colors[1]) {
                case 'blue red':
                    res = 'purple'
                    break;
                case 'blue yellow':
                    res = 'green'
                    break;
                case 'red yellow':
                    res = 'orange'
                    break;
                default: console.log('unknown color combo');
                    break;
            }
        }
        console.log('Resulting color: ' + res + '.');
        return res;
    };
    
    calibrate(arr) {
        arr.sort(function (a, b) { return a-b; });
        this.calibrationSequence = arr.map(item => item * 3);
        console.log(this.calibrationSequence)
    }
    
}

// Simulated code that will run the functions - a 'try & catch' will occur, meaning the throw can be used in the checkColors function within the constructor. Throw cannot be used without a try/catch.

try {
    var ducky = new Ducktypium('green');
    ducky.refract('red');
    ducky.calibrate([5, 10, 2])
}

catch (e) {
    console.error(e);
}