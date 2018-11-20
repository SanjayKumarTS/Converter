var inputUnit = document.getElementById("inputUnit").value;
var inputValue = document.getElementById("inputValue").value;

function mgInput() {
  document.getElementById("outputTable").style.display = "block";
  //console.log("Unit detected");
  //console.log(Number(inputValue));
  var g = Number(inputValue) / 1000;
  var kg = Number(inputValue) / 1000;
  var lb = kg * 2.205;
  var t = kg / 1000;
  document.getElementById("mg").innerHTML = Number(inputValue);
  document.getElementById("g").innerHTML = g;
  document.getElementById("kg").innerHTML = kg;
  document.getElementById("lb").innerHTML = lb;
  document.getElementById("t").innerHTML = t;
}

function gInput() {
  document.getElementById("outputTable").style.display = "block";
  //console.log("Unit detected");
  //console.log(Number(inputValue));
  var mg = Number(inputValue) * 1000;
  var kg = Number(inputValue) / 1000;
  var lb = kg * 2.205;
  var t = kg / 1000;
  document.getElementById("g").innerHTML = Number(inputValue);
  document.getElementById("mg").innerHTML = mg;
  document.getElementById("kg").innerHTML = kg;
  document.getElementById("lb").innerHTML = lb;
  document.getElementById("t").innerHTML = t;
}

function kgInput() {
  document.getElementById("outputTable").style.display = "block";
  //console.log("Unit detected");
  //console.log(Number(inputValue));
  var mg = Number(inputValue) * 1000000;
  var g = Number(inputValue) * 1000;
  var lb = g / 453.592;
  var t = Number(inputValue) / 1000;
  document.getElementById("kg").innerHTML = Number(inputValue);
  document.getElementById("mg").innerHTML = mg;
  document.getElementById("g").innerHTML = g;
  document.getElementById("lb").innerHTML = lb;
  document.getElementById("t").innerHTML = t;
}

function lbInput() {
  document.getElementById("outputTable").style.display = "block";
  //console.log("Unit detected");
  //console.log(Number(inputValue));
  var mg = Number(inputValue) / 453592.37;
  var g = mg / 1000;
  var kg = g / 1000;
  var t = kg / 1000;
  document.getElementById("kg").innerHTML = Number(inputValue);
  document.getElementById("mg").innerHTML = mg;
  document.getElementById("g").innerHTML = g;
  document.getElementById("kg").innerHTML = kg;
  document.getElementById("t").innerHTML = t;
}

function tInput() {
  document.getElementById("outputTable").style.display = "block";
  //console.log("Unit detected");
  //console.log(Number(inputValue));
  var kg = Number(inputValue) / 1000;
  var g = kg * 1000;
  var mg = g * 1000;
  var lb = kg * 2.205;
  document.getElementById("t").innerHTML = Number(inputValue);
  document.getElementById("mg").innerHTML = mg;
  document.getElementById("g").innerHTML = g;
  document.getElementById("kg").innerHTML = kg;
  document.getElementById("lb").innerHTML = lb;
}

function unitChange() {
  inputUnit = document.getElementById("inputUnit").value;
  inputValue = document.getElementById("inputValue").value;
  document.getElementById("mg").parentNode.style.display = "block";
  document.getElementById("g").parentNode.style.display = "block";
  document.getElementById("kg").parentNode.style.display = "block";
  document.getElementById("lb").parentNode.style.display = "block";
  document.getElementById("t").parentNode.style.display = "block";
  //console.log(inputUnit);
  switch (inputUnit) {
    case "mg":
      mgInput();
      break;
    case "g":
      gInput();
      break;
    case "kg":
      kgInput();
      break;
    case "lb":
      lgInput();
      break;
    case "t":
      tInput();
      break;
  }
}
