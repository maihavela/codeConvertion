var inp = $("#txta1");
var out = $("#txta2");
var btn = $("button");

/***
    Catch Convert click event.
***/
conv.addEventListener("click", function() {
  var str = inp.val();
     
  str = str.toUpperCase();
  str = str.trim(); //Remove whitespace from both sides of str
  var arr = str.split(""); //Divide str into the arr
  
  if (isEmpty(str)) {
     alert("Empty field. Please, insert a new text.");
  } else {
    checkConvertionType(str);    
  }  
});

/***
    Catch Clear click event.
***/
clear.addEventListener("click", function() {
  eraseText();
});

/***  Check type of convertion = Morse to Text or Text to Morse. 
      Param: slc, str.
      Return: void.
***/
function checkConvertionType(str) {
    var re = /[A-Za-z]/;
    var slc = $("select");
    var decoded = [];

    if (slc.val() == 'Text to Morse') {
      if (str[0].match(re)) {
        decoded = toMorse(str);
        out.val(decoded);
      } else {
        alert('If you want to convert human text to code morse, you should insert human text first.');
        eraseText();
      }
    } else {
      if (! (str[0].match(re))) {
        decoded = toHuman(str);
        out.val(decoded);
      } else {
        alert('If you want to convert code morse to human text, you should insert code morse first.');
        eraseText();
      }
    }
}

/*** Clear Textarea.
***/
function eraseText() {
  document.getElementById("txta1").value = "";
  document.getElementById("txta2").value = "";
}



/***  Check if textarea == empty. 
      Param: str.
      Return boolean.
***/
var isEmpty = function(str) {
  if (str == '') {
    return true;
  }else {
    return false;
  }
} 