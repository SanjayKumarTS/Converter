var inputUnit = document.getElementById("inputUnit").value;
var inputValue = document.getElementById("inputValue").value;


var cObject;
var url = "http://apilayer.net/api/live?access_key=51197dd427a3ed7963b660ad7c2dc606&currencies=INR,EUR,JPY,KWD,GBP&source=USD&format=1";
    var cObject;
    $.ajax(
        {
            url: url,
            dataType: 'json',
            success: function (json){ cObject = json;}
        });
//var jsonString = JSON.stringify(cObject);
//var cObject = JSON.parse(jsonString);
//console.log(cObject.quotes);
var USDEUR,USDINR,USDGBP,USDJPY,USDKWD;
function updateValues()
{
    USDINR = Number(cObject.quotes.USDINR);
    USDGBP = Number(cObject.quotes.USDGBP);
    USDEUR = Number(cObject.quotes.USDEUR);
    USDJPY = Number(cObject.quotes.USDJPY);
    USDKWD = Number(cObject.quotes.USDKWD);
}

function USDInput()
{
    updateValues();
    document.getElementById("outputTable").style.display = "block";
    //console.log("Unit detected");
    //console.log(Number(inputValue));
    var INR = Number(inputValue) * Number(cObject.quotes.USDINR);
    var GBP = Number(inputValue) * Number(cObject.quotes.USDGBP);
    var JPY = Number(inputValue) * Number(cObject.quotes.USDJPY);
    var EUR = Number(inputValue) * Number(cObject.quotes.USDEUR);
    var KWD = Number(inputValue) * Number(cObject.quotes.USDKWD);
    document.getElementById("USD").parentNode.style.display = "none";
    document.getElementById("GBP").innerHTML = GBP;
    document.getElementById("JPY").innerHTML = JPY;
    document.getElementById("EUR").innerHTML = EUR;
    document.getElementById("KWD").innerHTML = KWD;
    document.getElementById("INR").innerHTML = INR;
}

function INRInput()
{
    updateValues();
    document.getElementById("outputTable").style.display = "block";
    //console.log("Unit detected");
    //console.log(Number(inputValue));
    var USD = Number(inputValue) / USDINR;
    var GBP = Number(inputValue) * (USDGBP / USDINR);
    var JPY = Number(inputValue) * (USDJPY / USDINR);
    var EUR = Number(inputValue) * (USDEUR / USDINR);
    var KWD = Number(inputValue) * (USDKWD / USDINR);
    document.getElementById("INR").parentNode.style.display = "none";
    document.getElementById("GBP").innerHTML = GBP;
    document.getElementById("JPY").innerHTML = JPY;
    document.getElementById("EUR").innerHTML = EUR;
    document.getElementById("KWD").innerHTML = KWD;
    document.getElementById("USD").innerHTML = USD;
}

function EURInput()
{
    updateValues();
    document.getElementById("outputTable").style.display = "block";
    //console.log("Unit detected");
    //console.log(Number(inputValue));
    var USD = Number(inputValue) / USDEUR;
    var GBP = Number(inputValue) * (USDGBP / USDEUR);
    var JPY = Number(inputValue) * (USDJPY / USDEUR);
    var INR = Number(inputValue) * (USDINR / USDEUR);
    var KWD = Number(inputValue) * (USDKWD / USDEUR);
    document.getElementById("EUR").parentNode.style.display = "none";
    document.getElementById("GBP").innerHTML = GBP;
    document.getElementById("JPY").innerHTML = JPY;
    document.getElementById("INR").innerHTML = INR;
    document.getElementById("KWD").innerHTML = KWD;
    document.getElementById("USD").innerHTML = USD;
}

function GBPInput()
{
    updateValues();
    document.getElementById("outputTable").style.display = "block";
    //console.log("Unit detected");
    //console.log(Number(inputValue));
    var USD = Number(inputValue) / USDGBP;
    var EUR = Number(inputValue) * (USDEUR / USDGBP);
    var JPY = Number(inputValue) * (USDJPY / USDGBP);
    var INR = Number(inputValue) * (USDINR / USDGBP);
    var KWD = Number(inputValue) * (USDKWD / USDGBP);
    document.getElementById("GBP").parentNode.style.display = "none";
    document.getElementById("EUR").innerHTML = EUR;
    document.getElementById("JPY").innerHTML = JPY;
    document.getElementById("INR").innerHTML = INR;
    document.getElementById("KWD").innerHTML = KWD;
    document.getElementById("USD").innerHTML = USD;
}

function JPYInput()
{
    updateValues();
    document.getElementById("outputTable").style.display = "block";
    //console.log("Unit detected");
    //console.log(Number(inputValue));
    var USD = Number(inputValue) / USDJPY;
    var EUR = Number(inputValue) * (USDEUR / USDJPY);
    var GBP = Number(inputValue) * (USDGBP / USDJPY);
    var INR = Number(inputValue) * (USDINR / USDJPY);
    var KWD = Number(inputValue) * (USDKWD / USDJPY);
    document.getElementById("JPY").parentNode.style.display = "none";
    document.getElementById("EUR").innerHTML = EUR;
    document.getElementById("GBP").innerHTML = GBP;
    document.getElementById("INR").innerHTML = INR;
    document.getElementById("KWD").innerHTML = KWD;
    document.getElementById("USD").innerHTML = USD;
}

function KWDInput()
{
    updateValues();
    document.getElementById("outputTable").style.display = "block";
    //console.log("Unit detected");
    //console.log(Number(inputValue));
    var USD = Number(inputValue) / USDKWD;
    var EUR = Number(inputValue) * (USDEUR / USDKWD);
    var GBP = Number(inputValue) * (USDGBP / USDKWD);
    var INR = Number(inputValue) * (USDINR / USDKWD);
    var JPY = Number(inputValue) * (USDJPY / USDKWD);
    document.getElementById("KWD").parentNode.style.display = "none";
    document.getElementById("EUR").innerHTML = EUR;
    document.getElementById("GBP").innerHTML = GBP;
    document.getElementById("INR").innerHTML = INR;
    document.getElementById("JPY").innerHTML = JPY;
    document.getElementById("USD").innerHTML = USD;
}

function unitChange()
{
    inputUnit = document.getElementById("inputUnit").value;
    inputValue = document.getElementById("inputValue").value;
    document.getElementById("USD").parentNode.style.display = "block";
    document.getElementById("INR").parentNode.style.display = "block";
    document.getElementById("EUR").parentNode.style.display = "block";
    document.getElementById("GBP").parentNode.style.display = "block";
    document.getElementById("JPY").parentNode.style.display = "block";
    document.getElementById("KWD").parentNode.style.display = "block";
    //console.log(inputUnit);
    switch(inputUnit)
    {
        case "USD": USDInput();break;
        case "INR": INRInput();break;
        case "EUR": EURInput();break;
        case "GBP": GBPInput();break;
        case "JPY": JPYInput();break;
        case "KWD": KWDInput();break;
    }
}