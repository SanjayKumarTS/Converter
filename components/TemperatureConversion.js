var inputUnit = document.getElementById("inputUnit").value;
var inputValue = document.getElementById("inputValue").value;

function celciusInput() {
  document.getElementById("outputTable").style.display = "block";
  //console.log("Unit detected");
  //console.log(Number(inputValue));
  var fahrenheit = Number(inputValue) * (9 / 5) + 32;
  var kelvin = Number(inputValue) + 273.15;
  document.getElementById("celcius").innerHTML = Number(inputValue);
  document.getElementById("fahrenheit").innerHTML = fahrenheit;
  document.getElementById("kelvin").innerHTML = kelvin;
}

function fahrenheitInput() {
  document.getElementById("outputTable").style.display = "block";
  //console.log("Unit detected");
  //console.log(Number(inputValue));
  var celcius = (Number(inputValue) - 32) * (5 / 9);
  var kelvin = (Number(inputValue) - 32) * (5 / 9) + 273.15;
  document.getElementById("fahrenheit").innerHTML = Number(inputValue);
  document.getElementById("celcius").innerHTML = celcius;
  document.getElementById("kelvin").innerHTML = kelvin;
}

function kelvinInput() {
  document.getElementById("outputTable").style.display = "block";
  //console.log("Unit detected");
  //console.log(Number(inputValue));
  var celcius = Number(inputValue) - 273.15;
  var fahrenheit = (Number(inputValue) - 273.15) * (9 / 5) + 32;
  document.getElementById("kelvin").innerHTML = Number(inputValue);
  document.getElementById("celcius").innerHTML = celcius;
  document.getElementById("fahrenheit").innerHTML = fahrenheit;
}

function unitChange() {
  inputUnit = document.getElementById("inputUnit").value;
  inputValue = document.getElementById("inputValue").value;
  document.getElementById("celcius").parentNode.style.display = "block";
  document.getElementById("fahrenheit").parentNode.style.display = "block";
  document.getElementById("kelvin").parentNode.style.display = "block";
  //console.log(inputUnit);
  switch (inputUnit) {
    case "celcius":
      celciusInput();
      break;
    case "fahrenheit":
      fahrenheitInput();
      break;
    case "kelvin":
      kelvinInput();
      break;
  }
}
