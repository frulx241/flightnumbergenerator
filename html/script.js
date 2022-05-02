var number0Length = 1;
var numberNLength = 1;
var letterLength = 1;


function generateFN() {
  let flightnumber = "";
  var numbers0 = "123456789";
  var numbersN = "0123456789";
  var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  if (document.getElementById('style0').checked) {
    number0Length = 1;
    numberNLength = 0;
    letterLength = 1;
  }
  else if (document.getElementById('style1').checked) {
    number0Length = 1;
    numberNLength = 0;
    letterLength = 2;
  }
  else if (document.getElementById('style2').checked) {
    number0Length = 1;
    numberNLength = 1;
    letterLength = 1;
  }
  else if (document.getElementById('style3').checked) {
    number0Length = 1;
    numberNLength = 1;
    letterLength = 2;
  }
  else if (document.getElementById('style4').checked) {
    number0Length = 1;
    numberNLength = 2;
    letterLength = 1;
  }
  else {
    number0Length = 1;
    numberNLength = 3;
    letterLength = 0;
  }

  for (var i = 0; i < number0Length; i++) {
    var rN0 = Math.floor(Math.random() * numbers0.length);
    flightnumber += numbers0.substring(rN0, rN0 +1);
  }
  for (var j = 0; j < numberNLength; j++){
    flightnumber += numbersN.charAt(Math.floor(Math.random() * numbersN.length));
  }
  for (var k = 0; k < letterLength; k++){
    flightnumber += letters.charAt(Math.floor(Math.random() * letters.length));
  }
  document.getElementById('flightnumberBox').value = flightnumber;
}


