//GENERATE NUMBER
document.querySelector("button").addEventListener("click", generateNumber);


function operatorNumber() {
  var code = document.getElementsByClassName("generator-inputs")[0].value;
  var numberList = code.split("").map(function(i) {
    return parseInt(i, 10);
  });
  return numberList;
}

function randomNmubers() {
  var number = operatorNumber();
  for (var i = 0; i < 6; i++) {
    var allowedNumbers = Math.floor(Math.random() * 10);
    number.push(allowedNumbers);
  }
  return number;
}

function generateNumber() {
  var errorMessage = "";
  var place = "generateError";
  var code = document.getElementsByClassName("generator-inputs")[0].value;
  var icode = document.getElementsByClassName("generator-inputs")[1].value;
  if (!(code == "")) {
    var randomNumb = randomNmubers();
    var number = homeNumber(randomNumb);
    errorMesages(place, errorMessage);
    internationalNumber(number);
    return displayResultHome(number);
  } else {
    displayResultHome("---------");
    displayResultInternational("---------");
    errorMessage = "Please insert operator number";
    errorMesages(place, errorMessage);
  }
}

//FORMATING NUMBERS
function homeNumber(number) {
  var errorMessage = "";
  var place = "generateError";
  var formated = [];
  if (number[0] == 0) {
    for (var i = 0; i < number.length; i++) {
      if (i === 2) {
        formated.push(number[i] + " / ")
      } else if (i === 5) {
        formated.push(number[i] + " - ")
      } else {
        formated.push(number[i].toString());
      }
    }
    formated = formated.toString().replace(/,/g, '');
    return formated.toString();
  } else {
    displayResultHome("---------");
    displayResultInternational("---------");
    errorMessage = "First number of operator need to be 0";
    errorMesages(place, errorMessage);

  }
}

function internationalNumber(iFormar) {
  var errorMessage;
  var place = "generateError";
  var countryCode = document.getElementsByClassName("generator-inputs")[1].value;
  if (!(countryCode == "")) {
    if (countryCode[0] == "+") {
      countryCode = "(" + countryCode + ") ";
      iFormar = countryCode + iFormar.slice(1, iFormar.length);
      iFormar = iFormar.toString().replace(/,/g, '');
      return displayResultInternational(iFormar);
    } else {
      errorMessage = "Please insert + in front";
      errorMesages(place, errorMessage);
      displayResultInternational("---------");
    }
  } else {
    displayResultInternational("---------");
  }
}

//RESULT PANEL
function displayResultHome(number) {
  document.getElementById("homeNumber").innerHTML = number;
}

function displayResultInternational(inumber) {
  document.getElementById("internationalNumber").innerHTML = inumber;
}

//FONCTIONS FOR ERRORS
function errorMesages(place, msg) {
  return document.getElementsByClassName(place)[0].innerHTML = msg;
}
