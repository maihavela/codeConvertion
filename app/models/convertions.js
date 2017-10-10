
var MORSE_CODE = require("../morse_code.json");
var HUMAN_TXT = require("../human_txt.json");

/***  Coverte human text into code morse.  
         Param: Human Text (String). 
        Return: Code Morse (Array).
****/
exports.toMorse = function(humanCode, cb) {
    var decoded = [];
    humanCode = humanCode.toUpperCase().split("");
    for (var i = 0; i < humanCode.length; i++) {
        decoded[i] = MORSE_CODE[humanCode[i]];
    }
    decoded = decoded.join(" ");
    cb(decoded);
    //return decoded;
}

/***  Coverte code morse into human text.
         Param: Code Morse (String).
        Return: Human Text (Array).
****/
exports.toText = function(morseCode, cb) {
morseCode = morseCode.replace(':', ' ');

    var words = morseCode.split('  ');
    var letters = words.map((w) => w.split(' '));
    var decoded = [];
    console.log(letters);
    for(var i = 0; i < letters.length; i++){
        decoded[i] = [];
        for(var x = 0; x < letters[i].length; x++){
            console.log(HUMAN_TXT[ letters[i][x] ]);
            if( HUMAN_TXT[ letters[i][x] ] ){                
                decoded[i].push(HUMAN_TXT[letters[i][x]]);
            }
        }
    }
    decoded = decoded.map( arr => arr.join('') ).join(' ');
    cb(decoded);
}


