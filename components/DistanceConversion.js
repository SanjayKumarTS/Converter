var inputUnit = document.getElementById("inputUnit").value;
var inputValue = document.getElementById("inputValue").value;
function meterInput()
{
    document.getElementById("outputTable").style.display = "block";
    //console.log("Unit detected");
    //console.log(Number(inputValue));
    var milimeter = Number(inputValue) * 1000;
    var centimeter = Number(inputValue) * 100;
    var kilometer = Number(inputValue) / 1000;
    var inch = Number(inputValue) * 39.37;
    var feet = Number(inputValue) * 3.281;
    var mile = Number(inputValue) / 1609.344;
    var yard = Number(inputValue) * 1.094;
    document.getElementById("meter").parentNode.style.display = "none";
    document.getElementById("milimeter").innerHTML = milimeter;
    document.getElementById("centimeter").innerHTML = centimeter;
    document.getElementById("kilometer").innerHTML = kilometer;
    document.getElementById("inch").innerHTML = inch;
    document.getElementById("feet").innerHTML = feet;
    document.getElementById("mile").innerHTML = mile;
    document.getElementById("yard").innerHTML = yard;
}

function milimeterInput()
{
    document.getElementById("outputTable").style.display = "block";
    //console.log("Unit detected");
    //console.log(Number(inputValue));
    var meter = Number(inputValue) / 1000;
    var centimeter = Number(inputValue) / 10;
    var kilometer = Number(inputValue) / 10000;
    var inch = Number(inputValue) / 25.4;
    var feet = Number(inputValue) / 304.5;
    var mile = Number(inputValue) / 1609000;
    var yard = Number(inputValue) / 914.4;
    document.getElementById("milimeter").parentNode.style.display = "none";
    document.getElementById("meter").innerHTML = meter;
    document.getElementById("centimeter").innerHTML = centimeter;
    document.getElementById("kilometer").innerHTML = kilometer;
    document.getElementById("inch").innerHTML = inch;
    document.getElementById("feet").innerHTML = feet;
    document.getElementById("mile").innerHTML = mile;
    document.getElementById("yard").innerHTML = yard;
}

function centimeterInput()
{
    document.getElementById("outputTable").style.display = "block";
    //console.log("Unit detected");
    //console.log(Number(inputValue));
    var meter = Number(inputValue) / 100;
    var milimeter = Number(inputValue) * 10;
    var kilometer = Number(inputValue) / 100000;
    var inch = Number(inputValue) / 2.54;
    var feet = Number(inputValue) / 30.48;
    var mile = Number(inputValue) / 160934.4;
    var yard = Number(inputValue) * 91.44;
    document.getElementById("centimeter").parentNode.style.display = "none";
    document.getElementById("meter").innerHTML = meter;
    document.getElementById("milimeter").innerHTML = milimeter;
    document.getElementById("kilometer").innerHTML = kilometer;
    document.getElementById("inch").innerHTML = inch;
    document.getElementById("feet").innerHTML = feet;
    document.getElementById("mile").innerHTML = mile;
    document.getElementById("yard").innerHTML = yard;
}

function kilometerInput()
{
    document.getElementById("outputTable").style.display = "block";
    //console.log("Unit detected");
    //console.log(Number(inputValue));
    var meter = Number(inputValue) * 1000;
    var milimeter = Number(inputValue) * 1000000;
    var centimeter = Number(inputValue) * 100000;
    var inch = Number(inputValue) * 39370.079;
    var feet = Number(inputValue) * 3280.84;
    var mile = Number(inputValue) * 1.609;
    var yard = Number(inputValue) * 1093.613;
    document.getElementById("kilometer").parentNode.style.display = "none";
    document.getElementById("meter").innerHTML = meter;
    document.getElementById("centimeter").innerHTML = centimeter;
    document.getElementById("milimeter").innerHTML = milimeter;
    document.getElementById("inch").innerHTML = inch;
    document.getElementById("feet").innerHTML = feet;
    document.getElementById("mile").innerHTML = mile;
    document.getElementById("yard").innerHTML = yard;
}

function inchInput()
{
    document.getElementById("outputTable").style.display = "block";
    //console.log("Unit detected");
    //console.log(Number(inputValue));
    var meter = Number(inputValue) / 39.7;
    var milimeter = Number(inputValue) * 25.4;
    var centimeter = Number(inputValue) * 2.54;
    var kilometer = Number(inputValue) / 39370.079;
    var feet = Number(inputValue) / 12;
    var mile = Number(inputValue) / 63360;
    var yard = Number(inputValue) / 36;
    document.getElementById("inch").parentNode.style.display = "none";
    document.getElementById("meter").innerHTML = meter;
    document.getElementById("centimeter").innerHTML = centimeter;
    document.getElementById("milimeter").innerHTML = milimeter;
    document.getElementById("kilometer").innerHTML = kilometer;
    document.getElementById("feet").innerHTML = feet;
    document.getElementById("mile").innerHTML = mile;
    document.getElementById("yard").innerHTML = yard;
}

function feetInput()
{
    document.getElementById("outputTable").style.display = "block";
    //console.log("Unit detected");
    //console.log(Number(inputValue));
    var meter = Number(inputValue) / 3.218;
    var milimeter = Number(inputValue) * 304.8;
    var centimeter = Number(inputValue) * 30.48;
    var kilometer = Number(inputValue) / 3280.84;
    var inch = Number(inputValue) * 12;
    var mile = Number(inputValue) / 5280;
    var yard = Number(inputValue) / 3;
    document.getElementById("feet").parentNode.style.display = "none";
    document.getElementById("meter").innerHTML = meter;
    document.getElementById("centimeter").innerHTML = centimeter;
    document.getElementById("milimeter").innerHTML = milimeter;
    document.getElementById("kilometer").innerHTML = kilometer;
    document.getElementById("inch").innerHTML = inch;
    document.getElementById("mile").innerHTML = mile;
    document.getElementById("yard").innerHTML = yard;
}

function mileInput()
{
    document.getElementById("outputTable").style.display = "block";
    //console.log("Unit detected");
    //console.log(Number(inputValue));
    var meter = Number(inputValue) / 3.218;
    var milimeter = Number(inputValue) * 304.8;
    var centimeter = Number(inputValue) * 30.48;
    var kilometer = Number(inputValue) * 1.609;
    var inch = Number(inputValue) * 12;
    var feet = Number(inputValue) / 5280;
    var yard = Number(inputValue) / 3;
    document.getElementById("mile").parentNode.style.display = "none";
    document.getElementById("meter").innerHTML = meter;
    document.getElementById("centimeter").innerHTML = centimeter;
    document.getElementById("milimeter").innerHTML = milimeter;
    document.getElementById("kilometer").innerHTML = kilometer;
    document.getElementById("inch").innerHTML = inch;
    document.getElementById("feet").innerHTML = feet;
    document.getElementById("yard").innerHTML = yard;
}

function yardInput()
{
    document.getElementById("outputTable").style.display = "block";
    //console.log("Unit detected");
    //console.log(Number(inputValue));
    var meter = Number(inputValue) / 1.094;
    var milimeter = Number(inputValue) * 914.4;
    var centimeter = Number(inputValue) * 91.44;
    var kilometer = Number(inputValue) / 1093.613;
    var inch = Number(inputValue) * 36;
    var feet = Number(inputValue) * 3;
    var mile = Number(inputValue) / 1760;
    document.getElementById("yard").parentNode.style.display = "none";
    document.getElementById("meter").innerHTML = meter;
    document.getElementById("centimeter").innerHTML = centimeter;
    document.getElementById("milimeter").innerHTML = milimeter;
    document.getElementById("kilometer").innerHTML = kilometer;
    document.getElementById("inch").innerHTML = inch;
    document.getElementById("feet").innerHTML = feet;
    document.getElementById("mile").innerHTML = mile;
}

function unitChange()
{
    inputUnit = document.getElementById("inputUnit").value;
    inputValue = document.getElementById("inputValue").value;
    document.getElementById("meter").parentNode.style.display = "block";
    document.getElementById("milimeter").parentNode.style.display = "block";
    document.getElementById("centimeter").parentNode.style.display = "block";
    document.getElementById("kilometer").parentNode.style.display = "block";
    document.getElementById("inch").parentNode.style.display = "block";
    document.getElementById("feet").parentNode.style.display = "block";
    document.getElementById("mile").parentNode.style.display = "block";
    document.getElementById("yard").parentNode.style.display = "block";
    //console.log(inputUnit);
    switch(inputUnit)
    {
        case "meter": meterInput();break;
        case "milimeter": milimeterInput();break;
        case "centimeter": centimeterInput();break;
        case "kilometer": kilometerInput();break;
        case "inch": inchInput();break;
        case "feet": feetInput();break;
        case "mile": mileInput();break;
        case "yard": yardInput();break;
    }
}