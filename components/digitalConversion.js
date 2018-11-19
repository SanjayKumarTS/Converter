var inputUnit = document.getElementById("inputUnit").value;
var inputValue = document.getElementById("inputValue").value;

function bInput()
{
    document.getElementById("outputTable").style.display = "block";
    //console.log("Unit detected");
    //console.log(Number(inputValue));
    var B = Number(inputValue) / 8;
    var KB = Number(inputValue) / 8000;
    var MB = KB / 1000;
    var GB = MB / 1000;
    var TB = TB / 1000;
    document.getElementById("b").parentNode.style.display = "none";
    document.getElementById("B").innerHTML = B;
    document.getElementById("KB").innerHTML = KB;
    document.getElementById("MB").innerHTML = MB;
    document.getElementById("GB").innerHTML = GB;
    document.getElementById("TB").innerHTML = TB;
}

function BInput()
{
    document.getElementById("outputTable").style.display = "block";
    //console.log("Unit detected");
    //console.log(Number(inputValue));
    var b = Number(inputValue) * 8;
    var KB = Number(inputValue) / 1000;
    var MB = KB / 1000;
    var GB = MB / 1000;
    var TB = TB / 1000;
    document.getElementById("B").parentNode.style.display = "none";
    document.getElementById("b").innerHTML = b;
    document.getElementById("KB").innerHTML = KB;
    document.getElementById("MB").innerHTML = MB;
    document.getElementById("GB").innerHTML = GB;
    document.getElementById("TB").innerHTML = TB;
}

function KBInput()
{
    document.getElementById("outputTable").style.display = "block";
    //console.log("Unit detected");
    //console.log(Number(inputValue));
    var b = Number(inputValue) * 8000;
    var B = Number(inputValue) * 1000;
    var MB = KB / 1000;
    var GB = MB / 1000;
    var TB = TB / 1000;
    document.getElementById("KB").parentNode.style.display = "none";
    document.getElementById("b").innerHTML = b;
    document.getElementById("B").innerHTML = B;
    document.getElementById("MB").innerHTML = MB;
    document.getElementById("GB").innerHTML = GB;
    document.getElementById("TB").innerHTML = TB;
}

function MBInput()
{
    document.getElementById("outputTable").style.display = "block";
    //console.log("Unit detected");
    //console.log(Number(inputValue));
    var b = Number(inputValue) * 838900;
    var B = Number(inputValue) * 104900;
    var KB = B / 1000;
    var GB = KB / 1048.576;
    var TB = TB / 1000;
    document.getElementById("MB").parentNode.style.display = "none";
    document.getElementById("b").innerHTML = b;
    document.getElementById("B").innerHTML = B;
    document.getElementById("KB").innerHTML = KB;
    document.getElementById("GB").innerHTML = GB;
    document.getElementById("TB").innerHTML = TB;
}

function GBInput()
{
    document.getElementById("outputTable").style.display = "block";
    //console.log("Unit detected");
    //console.log(Number(inputValue));
    var b = Number(inputValue) * 8000000000;
    var B = b * 8;
    var KB = B / 1000;
    var MB = KB / 1048.576;
    var TB = MB / 1000000;
    document.getElementById("GB").parentNode.style.display = "none";
    document.getElementById("b").innerHTML = b;
    document.getElementById("B").innerHTML = B;
    document.getElementById("KB").innerHTML = KB;
    document.getElementById("MB").innerHTML = MB;
    document.getElementById("TB").innerHTML = TB;
}

function TBInput()
{
    document.getElementById("outputTable").style.display = "block";
    //console.log("Unit detected");
    //console.log(Number(inputValue));
    var b = Number(inputValue) * 8000000000000;
    var B = b * 8;
    var KB = B / 1000;
    var MB = KB / 1048.576;
    var GB = MB / 1000000;
    document.getElementById("TB").parentNode.style.display = "none";
    document.getElementById("b").innerHTML = b;
    document.getElementById("B").innerHTML = B;
    document.getElementById("KB").innerHTML = KB;
    document.getElementById("MB").innerHTML = MB;
    document.getElementById("GB").innerHTML = GB;
}

function unitChange()
{
    inputUnit = document.getElementById("inputUnit").value;
    inputValue = document.getElementById("inputValue").value;
    document.getElementById("b").parentNode.style.display = "block";
    document.getElementById("B").parentNode.style.display = "block";
    document.getElementById("KB").parentNode.style.display = "block";
    document.getElementById("MB").parentNode.style.display = "block";
    document.getElementById("GB").parentNode.style.display = "block";
    document.getElementById("TB").parentNode.style.display = "block";
    //console.log(inputUnit);
    switch(inputUnit)
    {
        case "b": bInput();break;
        case "B": BInput();break;
        case "KB": KBInput();break;
        case "MB": MBInput();break;
        case "GB": GBInput();break;
        case "TB": TBInput();break;
    }
}