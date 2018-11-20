var inputUnit = document.getElementById("inputUnit").value;
var inputValue = document.getElementById("inputValue").value;

function binaryInput() {
  document.getElementById("outputTable").style.display = "block";
  //console.log("Unit detected");
  //console.log(Number(inputValue));
  var decimal = parseInt(inputValue, 2);
  var octal = decimal.toString(8);
  var hexadecimal = decimal.toString(16);
  document.getElementById("binary").innerHTML = Number(inputValue);
  document.getElementById("octal").innerHTML = octal;
  document.getElementById("decimal").innerHTML = decimal;
  document.getElementById("hexadecimal").innerHTML = hexadecimal;
}

function octalInput() {
  document.getElementById("outputTable").style.display = "block";
  //console.log("Unit detected");
  //console.log(Number(inputValue));
  var decimal = parseInt(inputValue, 8);
  var binary = decimal.toString(2);
  var hexadecimal = decimal.toString(16);
  document.getElementById("octal").innerHTML = Number(inputValue);
  document.getElementById("binary").innerHTML = binary;
  document.getElementById("decimal").innerHTML = decimal;
  document.getElementById("hexadecimal").innerHTML = hexadecimal;
}

function decimalInput() {
  document.getElementById("outputTable").style.display = "block";
  //console.log("Unit detected");
  //console.log(Number(inputValue));
  var binary = Number(inputValue).toString(2);
  var octal = Number(inputValue).toString(8);
  var hexadecimal = Number(inputValue).toString(16);
  document.getElementById("decimal").innerHTML = Number(inputValue);
  document.getElementById("binary").innerHTML = binary;
  document.getElementById("octal").innerHTML = octal;
  document.getElementById("hexadecimal").innerHTML = hexadecimal;
}

function hexadecimalInput() {
  document.getElementById("outputTable").style.display = "block";
  //console.log("Unit detected");
  //console.log(Number(inputValue));
  var decimal = parseInt(inputValue, 16);
  var binary = decimal.toString(2);
  var octal = decimal.toString(8);
  document.getElementById("hexadecimal").innerHTML = Number(inputValue);
  document.getElementById("binary").innerHTML = binary;
  document.getElementById("octal").innerHTML = octal;
  document.getElementById("decimal").innerHTML = decimal;
}

function unitChange() {
  inputUnit = document.getElementById("inputUnit").value;
  inputValue = document.getElementById("inputValue").value;
  document.getElementById("binary").parentNode.style.display = "block";
  document.getElementById("octal").parentNode.style.display = "block";
  document.getElementById("decimal").parentNode.style.display = "block";
  document.getElementById("hexadecimal").parentNode.style.display = "block";
  //console.log(inputUnit);
  switch (inputUnit) {
    case "binary":
      binaryInput();
      break;
    case "octal":
      octalInput();
      break;
    case "decimal":
      decimalInput();
      break;
    case "hexadecimal":
      hexadecimalInput();
      break;
  }
}
