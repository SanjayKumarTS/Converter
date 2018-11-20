var inputUnit = document.getElementById("inputUnit").value;
var inputValue = document.getElementById("inputValue").value;

function mphInput()
{
    document.getElementById("outputTable").style.display = "block";
    //console.log("Unit detected");
    //console.log(Number(inputValue));
    var mps = Number(inputValue) / 2.237;
    var kmph = Number(inputValue) * 1.609;
    var knot = Number(inputValue) / 1.151;
    var fps = Number(inputValue) * 1.467;
    document.getElementById("mph").parentNode.style.display = "none";
    document.getElementById("mps").innerHTML = mps;
    document.getElementById("kmph").innerHTML = kmph;
    document.getElementById("knot").innerHTML = knot;
    document.getElementById("fps").innerHTML = fps;
}

function fpsInput()
{
    document.getElementById("outputTable").style.display = "block";
    //console.log("Unit detected");
    //console.log(Number(inputValue));
    var mps = Number(inputValue) / 3.281;
    var kmph = Number(inputValue) * 1.097;
    var knot = Number(inputValue) / 1.688;
    var mph = Number(inputValue) / 1.467;
    document.getElementById("fps").parentNode.style.display = "none";
    document.getElementById("mps").innerHTML = mps;
    document.getElementById("kmph").innerHTML = kmph;
    document.getElementById("knot").innerHTML = knot;
    document.getElementById("mph").innerHTML = mph;
}

function mpsInput()
{
    document.getElementById("outputTable").style.display = "block";
    //console.log("Unit detected");
    //console.log(Number(inputValue));
    var fps = Number(inputValue) * 3.281;
    var kmph = Number(inputValue) * 3.6;
    var knot = Number(inputValue) * 1.944;
    var mph = Number(inputValue) / 1.151;
    document.getElementById("mps").parentNode.style.display = "none";
    document.getElementById("fps").innerHTML = fps;
    document.getElementById("kmph").innerHTML = kmph;
    document.getElementById("knot").innerHTML = knot;
    document.getElementById("mph").innerHTML = mph;
}

function kmphInput()
{
    document.getElementById("outputTable").style.display = "block";
    //console.log("Unit detected");
    //console.log(Number(inputValue));
    var fps = Number(inputValue) / 1.097;
    var mps = Number(inputValue) / 3.6;
    var knot = Number(inputValue) / 1.852;
    var mph = Number(inputValue) / 1.609;
    document.getElementById("kmph").parentNode.style.display = "none";
    document.getElementById("fps").innerHTML = fps;
    document.getElementById("mps").innerHTML = mps;
    document.getElementById("knot").innerHTML = knot;
    document.getElementById("mph").innerHTML = mph;
}

function knotInput()
{
    document.getElementById("outputTable").style.display = "block";
    //console.log("Unit detected");
    //console.log(Number(inputValue));
    var fps = Number(inputValue) * 1.688;
    var mps = Number(inputValue) / 1.944;
    var kmph = Number(inputValue) * 1.852;
    var mph = Number(inputValue) * 1.151;
    document.getElementById("knot").parentNode.style.display = "none";
    document.getElementById("fps").innerHTML = fps;
    document.getElementById("mps").innerHTML = mps;
    document.getElementById("kmph").innerHTML = kmph;
    document.getElementById("mph").innerHTML = mph;
}

function unitChange()
{
    inputUnit = document.getElementById("inputUnit").value;
    inputValue = document.getElementById("inputValue").value;
    document.getElementById("fps").parentNode.style.display = "block";
    document.getElementById("mps").parentNode.style.display = "block";
    document.getElementById("mph").parentNode.style.display = "block";
    //console.log(inputUnit);
    switch(inputUnit)
    {
        case "mph": mphInput();break;
        case "fps": fpsInput();break;
        case "mps": mpsInput();break;
        case "kmph": kmphInput();break;
        case "knot": knotInput();break;
    }
}