var number0Length = 0;
var numberNLength = 0;
var letterLength = 0;

if(document.getElementById('style0').checked) {
  number0Length = 1;
  numberNLength = 0;
  letterLength = 1;
}
else if(document.getElementById('style1').checked) {
  number0Length = 1;
  numberNLength = 0;
  letterLength = 2;
}
else if(document.getElementById('style2').checked) {
  number0Length = 1;
  numberNLength = 1;
  letterLength = 1;
}
else if(document.getElementById('style3').checked) {
  number0Length = 1;
  numberNLength = 1;
  letterLength = 2;
}
else if(document.getElementById('style1').checked) {
  number0Length = 1;
  numberNLength = 2;
  letterLength = 1;
}
else {
  number0Length = 1;
  numberNLength = 3;
  letterLength = 0;
}


function generateFN() {
  var text = "";
  var numbers0 = "123456789";
  var numbersN = "0123456789";
  var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (var i = 0; i < 1; i++)
    text += numbers0.charAt(Math.floor(Math.random() * numbers0.length));
  for (var j = 0; j < 3; j++)
    text += numbersN.charAt(Math.floor(Math.random() * numbersN.length));
  for (var k = 0; k < 0; k++)
    text += letters.charAt(Math.floor(Math.random() * letters.length));
  return text;
}

console.log(generateFN())


/*const keys = {
    upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowerCase: "abcdefghijklmnopqrstuvwxyz",
    number: "0123456789",
    symbol: "!@#$%^&*()_+~\`|}{[]:;?><,./-="
  }
  const getKey = [
    function upperCase() {
      return keys.upperCase[Math.floor(Math.random() * keys.upperCase.length)];
    },
    function lowerCase() {
      return keys.lowerCase[Math.floor(Math.random() * keys.lowerCase.length)];
    },
    function number() {
      return keys.number[Math.floor(Math.random() * keys.number.length)];
    },
    function symbol() {
      return keys.symbol[Math.floor(Math.random() * keys.symbol.length)];
    }
  ];
  
  function createPassword() {
    const upper = document.getElementById("upperCase").checked;
    const lower = document.getElementById("lowerCase").checked;
    const number = document.getElementById("number").checked;
    const symbol = document.getElementById("symbol").checked;
    if (upper + lower + number + symbol === 0) {
      alert("Please check atleast one box!");
      return;
    }
    const passwordBox = document.getElementById("passwordBox");
    const length = document.getElementById("length");
    let password = "";
    while (length.value > password.length) {
      let keyToAdd = getKey[Math.floor(Math.random() * getKey.length)];
      let isChecked = document.getElementById(keyToAdd.name).checked;
      if (isChecked) {
        password += keyToAdd();
      }
    }
    passwordBox.innerHTML = password;
  }
  function copyPassword() {
    const textarea = document.createElement("textarea");
    const password = document.getElementById("passwordBox").innerText;
    if (!password) { return; }
    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    alert("Password copied to clipboard");
  }*/
