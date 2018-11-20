var inputUnit = document.getElementById("inputUnit").value;
var inputValue = document.getElementById("inputValue").value;

function paInput() {
  document.getElementById("outputTable").style.display = "block";
  //console.log("Unit detected");
  //console.log(Number(inputValue));
  var atm = Number(inputValue) / 101325;
  var bar = Number(inputValue) / 100000;
  var torr = Number(inputValue) / 133.322;
  document.getElementById("pa").innerHTML = Number(inputValue);
  document.getElementById("atm").innerHTML = atm;
  document.getElementById("bar").innerHTML = bar;
  document.getElementById("torr").innerHTML = torr;
}

function atmInput() {
  document.getElementById("outputTable").style.display = "block";
  //console.log("Unit detected");
  //console.log(Number(inputValue));
  var pa = Number(inputValue) * 101325;
  var bar = Number(inputValue) / 100000;
  var torr = Number(inputValue) / 133.322;
  document.getElementById("atm").innerHTML = Number(inputValue);
  document.getElementById("pa").innerHTML = pa;
  document.getElementById("bar").innerHTML = bar;
  document.getElementById("torr").innerHTML = torr;
}

function barInput() {
  document.getElementById("outputTable").style.display = "block";
  //console.log("Unit detected");
  //console.log(Number(inputValue));
  var pa = Number(inputValue) * 100000;
  var atm = Number(inputValue) / 1.013;
  var torr = Number(inputValue) * 750.062;
  document.getElementById("bar").innerHTML = Number(inputValue);
  document.getElementById("pa").innerHTML = pa;
  document.getElementById("atm").innerHTML = atm;
  document.getElementById("torr").innerHTML = torr;
}

function torrInput() {
  document.getElementById("outputTable").style.display = "block";
  //console.log("Unit detected");
  //console.log(Number(inputValue));
  var pa = Number(inputValue) * 133.322;
  var atm = Number(inputValue) / 760;
  var bar = Number(inputValue) / 750.062;
  document.getElementById("torr").innerHTML = Number(inputValue);
  document.getElementById("pa").innerHTML = pa;
  document.getElementById("atm").innerHTML = atm;
  document.getElementById("bar").innerHTML = bar;
}

function unitChange() {
  inputUnit = document.getElementById("inputUnit").value;
  inputValue = document.getElementById("inputValue").value;
  document.getElementById("pa").parentNode.style.display = "block";
  document.getElementById("atm").parentNode.style.display = "block";
  document.getElementById("bar").parentNode.style.display = "block";
  document.getElementById("torr").parentNode.style.display = "block";
  //console.log(inputUnit);
  switch (inputUnit) {
    case "pa":
      paInput();
      break;
    case "atm":
      atmInput();
      break;
    case "torr":
      torrInpur();
      break;
    case "bar":
      barInput();
      break;
  }
}
