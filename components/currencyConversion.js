var inputUnit = document.getElementById("inputUnit").value;
var inputValue = document.getElementById("inputValue").value;

var cObject;
var url = "http://apilayer.net/api/live?access_key=51197dd427a3ed7963b660ad7c2dc606&currencies=INR,EUR,JPY,KWD,GBP&source=USD&format=1";
    var currencyObject;
    $.ajax(
        {
            url: url,
            dataType: 'json',
            success: function (json){ cObject = json;}
        });
var jsonString = JSON.stringify(cObject.quotes);
var currencyObject = JSON.parse(jsonString);
fx.base = "USD";
fx.rates = {
    "EUR": Number(currencyObject.USDEUR),
    "INR": Number(currencyObject.USDINR),
    "GBP": Number(currencyObject.USDGBP),
    "JPY": Number(currencyObject.USDJPY),
    "KWD": Number(currencyObject.USDKWD),
};


function USDInput()
{
    document.getElementById("outputTable").style.display = "block";
    //console.log("Unit detected");
    //console.log(Number(inputValue));
    var INR = fx.convert(Number(inputValue),{from: "USD", to:"INR"}); 
    var GBP = Number(inputValue) * Number(currencyObject.quotes.USDGBP);
    var JPY = Number(inputValue) * Number(currencyObject.quotes.USDJPY);
    var EUR = Number(inputValue) * Number(currencyObject.quotes.USDEUR);
    var KWD = Number(inputValue) * Number(currencyObject.quotes.USDKWD);
    document.getElementById("USD").parentNode.style.display = "none";
    document.getElementById("GBP").innerHTML = GBP;
    document.getElementById("JPY").innerHTML = JPY;
    document.getElementById("EUR").innerHTML = EUR;
    document.getElementById("KWD").innerHTML = KWD;
    document.getElementById("INR").innerHTML = INR;
}

function INRInput()
{
    document.getElementById("outputTable").style.display = "block";
    //console.log("Unit detected");
    //console.log(Number(inputValue));
    var USD = Number(inputValue) * Number(currencyObject.quotes.INRUSD);
    var GBP = Number(inputValue) * Number(currencyObject.quotes.INRGBP);
    var JPY = Number(inputValue) * Number(currencyObject.quotes.INRJPY);
    var EUR = Number(inputValue) * Number(currencyObject.quotes.INREUR);
    var KWD = Number(inputValue) * Number(currencyObject.quotes.INRKWD);
    document.getElementById("INR").parentNode.style.display = "none";
    document.getElementById("GBP").innerHTML = GBP;
    document.getElementById("JPY").innerHTML = JPY;
    document.getElementById("EUR").innerHTML = EUR;
    document.getElementById("KWD").innerHTML = KWD;
    document.getElementById("USD").innerHTML = USD;
}

function EURInput()
{
    document.getElementById("outputTable").style.display = "block";
    //console.log("Unit detected");
    //console.log(Number(inputValue));
    var USD = Number(inputValue) * Number(currencyObject.quotes.EURUSD);
    var GBP = Number(inputValue) * Number(currencyObject.quotes.EURGBP);
    var JPY = Number(inputValue) * Number(currencyObject.quotes.EURJPY);
    var INR = Number(inputValue) * Number(currencyObject.quotes.EURINR);
    var KWD = Number(inputValue) * Number(currencyObject.quotes.EURKWD);
    document.getElementById("EUR").parentNode.style.display = "none";
    document.getElementById("GBP").innerHTML = GBP;
    document.getElementById("JPY").innerHTML = JPY;
    document.getElementById("INR").innerHTML = INR;
    document.getElementById("KWD").innerHTML = KWD;
    document.getElementById("USD").innerHTML = USD;
}

function GBPInput()
{
    document.getElementById("outputTable").style.display = "block";
    //console.log("Unit detected");
    //console.log(Number(inputValue));
    var USD = Number(inputValue) * Number(currencyObject.quotes.GBPUSD);
    var EUR = Number(inputValue) * Number(currencyObject.quotes.GBPEUR);
    var JPY = Number(inputValue) * Number(currencyObject.quotes.GBPJPY);
    var INR = Number(inputValue) * Number(currencyObject.quotes.GBPINR);
    var KWD = Number(inputValue) * Number(currencyObject.quotes.GBPKWD);
    document.getElementById("GBP").parentNode.style.display = "none";
    document.getElementById("EUR").innerHTML = EUR;
    document.getElementById("JPY").innerHTML = JPY;
    document.getElementById("INR").innerHTML = INR;
    document.getElementById("KWD").innerHTML = KWD;
    document.getElementById("USD").innerHTML = USD;
}

function JPYInput()
{
    document.getElementById("outputTable").style.display = "block";
    //console.log("Unit detected");
    //console.log(Number(inputValue));
    var USD = Number(inputValue) * Number(currencyObject.quotes.JPYUSD);
    var EUR = Number(inputValue) * Number(currencyObject.quotes.JPYEUR);
    var GBP = Number(inputValue) * Number(currencyObject.quotes.JPYGBP);
    var INR = Number(inputValue) * Number(currencyObject.quotes.JPYINR);
    var KWD = Number(inputValue) * Number(currencyObject.quotes.JPYKWD);
    document.getElementById("JPY").parentNode.style.display = "none";
    document.getElementById("EUR").innerHTML = EUR;
    document.getElementById("GBP").innerHTML = GBP;
    document.getElementById("INR").innerHTML = INR;
    document.getElementById("KWD").innerHTML = KWD;
    document.getElementById("USD").innerHTML = USD;
}

function KWDInput()
{
    document.getElementById("outputTable").style.display = "block";
    //console.log("Unit detected");
    //console.log(Number(inputValue));
    var USD = Number(inputValue) * Number(currencyObject.quotes.KWDUSD);
    var EUR = Number(inputValue) * Number(currencyObject.quotes.KWDEUR);
    var GBP = Number(inputValue) * Number(currencyObject.quotes.KWDGBP);
    var INR = Number(inputValue) * Number(currencyObject.quotes.KWDINR);
    var JPY = Number(inputValue) * Number(currencyObject.quotes.KWDJPY);
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