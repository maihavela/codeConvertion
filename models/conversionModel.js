"use strict";
//var exports = module.exports = {};
var MORSE_CODE = {
  "A": ".-",
  "B": "-...",
  "C": "-.-.",
  "D": "-..",
  "E": ".",
  "F": "..-.",
  "G": "--.",
  "H": "....",
  "I": "..",
  "J": ".---",
  "K": "-.-",
  "L": ".-..",
  "M": "--",
  "N": "-.",
  "O": "---",
  "P": ".--.",
  "Q": "--.-",
  "R": ".-.",
  "S": "...",
  "T": "-",
  "U": "..-",
  "V": "...-",
  "W": ".--",
  "X": "-..-",
  "Y": "-.--",
  "Z": "--..",
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  "Fullstop": ".-.-.-",
};

var HUMAN_TXT = {  
  ".-": "A",
  "-...": "B",
  "-.-.": "C",
  "-..": "D",
  ".": "E",
  "..-.": "F",
  "--.": "G",
  "....": "H",
  "..": "I",
  ".---": "J",
  "-.-": "K",
  ".-..": "L",
  "--": "M",
  "-.": "N",
  "---": "O",
  ".--.": "P",
  "--.-": "Q",
  ".-.": "R",
  "...": "S",
  "-": "T",
  "..-": "U",
  "...-": "V",
  ".--": "W",
  "-..-": "X",
  "-.--": "Y",
  "--..": "Z",
  "-----": "0",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  //"Fullstop": ".-.-.-",
};

/***  Coverte human text into code morse.  
      Param: Human Text (String). 
      Return: Code Morse (Array).
****/
var toMorse = function(humanCode) {
  var decoded = [];
  //var words = (humanCode).toUpperCase();
  humanCode = (humanCode).split('');
  for (var i = 0; i < humanCode.length; i++) {
    decoded[i] = MORSE_CODE[humanCode[i]];
  }
  decoded = decoded.join(" ");
  //console.log(str);
  //out.val(decoded);
  return decoded;
}

/***  Coverte code morse into human text.
      Param: Code Morse (String).
      Return: Human Text (Array).
****/
var toHuman = function(morseCode){
  var words = (morseCode).split('  ');
  var letters = words.map((w) => w.split(' '));
  var decoded = [];
  for(var i = 0; i < letters.length; i++){
    decoded[i] = [];
    for(var x = 0; x < letters[i].length; x++){
      if( HUMAN_TXT[letters[i][x]] ){
        decoded[i].push( HUMAN_TXT[letters[i][x]] );
      }
    }
  }
  decoded = decoded.map( arr => arr.join('') ).join(' ');
  //out.val(decoded);
  return decoded;
}

module.exports.toMorse = toMorse;
module.exports.toHuman = toHuman;