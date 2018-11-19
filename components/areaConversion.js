var inputUnit = document.getElementById("inputUnit").value;
var inputValue = document.getElementById("inputValue").value;

function inch2Input()
{
    document.getElementById("outputTable").style.display = "block";
    //console.log("Unit detected");
    //console.log(Number(inputValue));
    var m2 = Number(inputValue) / 1550.003;
    var ft2 = Number(inputValue) / 144;
    var km2 = Number(inputValue) / 1550000000;
    var acre = Number(inputValue) / 6273000;
    var hectare = Number(inputValue) / 15500000;
    document.getElementById("inch2").parentNode.style.display = "none";
    document.getElementById("m2").innerHTML = m2;
    document.getElementById("ft2").innerHTML = ft2;
    document.getElementById("km2").innerHTML = km2;
    document.getElementById("acre").innerHTML = acre;
    document.getElementById("hectare").innerHTML = hectare;
}

function m2Input()
{
    document.getElementById("outputTable").style.display = "block";
    //console.log("Unit detected");
    //console.log(Number(inputValue));
    var inch2 = Number(inputValue) * 1550.003;
    var ft2 = Number(inputValue) * 10.764;
    var km2 = Number(inputValue) / 1000000;
    var acre = Number(inputValue) / 4046.856;
    var hectare = Number(inputValue) / 10000;
    document.getElementById("m2").parentNode.style.display = "none";
    document.getElementById("inch2").innerHTML = inch2;
    document.getElementById("ft2").innerHTML = ft2;
    document.getElementById("km2").innerHTML = km2;
    document.getElementById("acre").innerHTML = acre;
    document.getElementById("hectare").innerHTML = hectare;
}

function ft2Input()
{
    document.getElementById("outputTable").style.display = "block";
    //console.log("Unit detected");
    //console.log(Number(inputValue));
    var m2 = Number(inputValue) / 10.764;
    var inch2 = Number(inputValue) * 144;
    var km2 = Number(inputValue) / 10760000;
    var acre = Number(inputValue) / 43560;
    var hectare = Number(inputValue) / 107639.104;
    document.getElementById("ft2").parentNode.style.display = "none";
    document.getElementById("m2").innerHTML = m2;
    document.getElementById("inch2").innerHTML = inch2;
    document.getElementById("km2").innerHTML = km2;
    document.getElementById("acre").innerHTML = acre;
    document.getElementById("hectare").innerHTML = hectare;
}

function km2Input()
{
    document.getElementById("outputTable").style.display = "block";
    //console.log("Unit detected");
    //console.log(Number(inputValue));
    var m2 = Number(inputValue) * 1000000;
    var inch2 = Number(inputValue) * 1550000000;
    var ft2 = Number(inputValue) * 10760000;
    var acre = Number(inputValue) * 247.105;
    var hectare = Number(inputValue) * 100;
    document.getElementById("km2").parentNode.style.display = "none";
    document.getElementById("m2").innerHTML = m2;
    document.getElementById("inch2").innerHTML = inch2;
    document.getElementById("ft2").innerHTML = ft2;
    document.getElementById("acre").innerHTML = acre;
    document.getElementById("hectare").innerHTML = hectare;
}

function acreInput()
{
    document.getElementById("outputTable").style.display = "block";
    //console.log("Unit detected");
    //console.log(Number(inputValue));
    var m2 = Number(inputValue) * 4046.856;
    var inch2 = Number(inputValue) * 6273000;
    var ft2 = Number(inputValue) * 43560;
    var km2 = Number(inputValue) / 247.105;
    var hectare = Number(inputValue) / 2.471;
    document.getElementById("acre").parentNode.style.display = "none";
    document.getElementById("m2").innerHTML = m2;
    document.getElementById("inch2").innerHTML = inch2;
    document.getElementById("ft2").innerHTML = ft2;
    document.getElementById("km2").innerHTML = km2;
    document.getElementById("hectare").innerHTML = hectare;
}

function hectareInput()
{
    document.getElementById("outputTable").style.display = "block";
    //console.log("Unit detected");
    //console.log(Number(inputValue));
    var m2 = Number(inputValue) * 10000;
    var inch2 = Number(inputValue)  * 15500000;
    var ft2 = Number(inputValue) * 107639.104;
    var acre = Number(inputValue) * 2.471;
    var km2 = Number(inputValue) / 100;
    document.getElementById("hectare").parentNode.style.display = "none";
    document.getElementById("m2").innerHTML = m2;
    document.getElementById("inch2").innerHTML = inch2;
    document.getElementById("ft2").innerHTML = ft2;
    document.getElementById("acre").innerHTML = acre;
    document.getElementById("km2").innerHTML = km2;
}

function unitChange()
{
    inputUnit = document.getElementById("inputUnit").value;
    inputValue = document.getElementById("inputValue").value;
    document.getElementById("inch2").parentNode.style.display = "block";
    document.getElementById("m2").parentNode.style.display = "block";
    document.getElementById("ft2").parentNode.style.display = "block";
    document.getElementById("km2").parentNode.style.display = "block";
    document.getElementById("acre").parentNode.style.display = "block";
    document.getElementById("hectare").parentNode.style.display = "block";
    //console.log(inputUnit);
    switch(inputUnit)
    {
        case "inch2": inch2Input();break;
        case "m2": m2Input();break;
        case "ft2": ft2Input();break;
        case "km2": km2Input();break;
        case "acre": acreInput();break;
        case "hectare": hectareInput();break;
    }
}