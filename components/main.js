function focusLost() {
  document.querySelector(".drop-down-content").style.display = "none";
}
let keywordValueMap = new Map([
  ["Area", "areaConversion.php"],
  ["Inch", "areaConversion.php"],
  ["Meter", "areaConversion.php"],
  ["Feet", "areaConversion.php"],
  ["Kilometer", "areaConversion.php"],
  ["Acre", "areaConversion.php"],
  ["Hectare", "areaConversion.php"],
  ["US Dollar", "currencyConversion.php"],
  ["Indian Rupee", "currencyConversion.php"],
  ["Euro", "currencyConversion.php"],
  ["Japan Yen", "currencyConversion.php"],
  ["Great Britain Pound", "currencyConversion.php"],
  ["Kuwait Dinar", "currencyConversion.php"],
  ["Bit", "digitalConversion.php"],
  ["Byte", "digitalConversion.php"],
  ["KiloByte", "digitalConversion.php"],
  ["MegaByte", "digitalConversion.php"],
  ["GigaByte", "digitalConversion.php"],
  ["TeraByte", "digitalConversion.php"],
  ["Meter", "distanceConversion.php"],
  ["Centimeter", "distanceConversion.php"],
  ["Kilometer", "distanceConversion.php"],
  ["Milimeter", "distanceConversion.php"],
  ["Inch", "distanceConversion.php"],
  ["Yard", "distanceConversion.php"],
  ["Feet", "distanceConversion.php"],
  ["Mile", "distanceConversion.php"],
  ["MiliGram", "massConversion.php"],
  ["Gram", "massConversion.php"],
  ["KiloGram", "massConversion.php"],
  ["Pound", "massConversion.php"],
  ["Ton", "massConversion.php"],
  ["Binary", "numberSystemConversion.php"],
  ["Octal", "numberSystemConversion.php"],
  ["Decimal", "numberSystemConversion.php"],
  ["Hexadecimal", "numberSystemConversion.php"],
  ["Pascal", "pressureConversion.php"],
  ["Atmosphere", "pressureConversion.php"],
  ["Bar", "pressureConversion.php"],
  ["Torr", "pressureConversion.php"],
  ["Celcius", "temperatureConversion.php"],
  ["Fahrenheit", "temperatureConversion.php"],
  ["Kelvin", "temperatureConversion.php"],
  ["Currency", "currencyConversion.php"],
  ["Digital", "digitalConversion.php"],
  ["Distance", "distanceConversion.php"],
  ["Mass", "massConversion.php"],
  ["Weight", "massConversion.php"],
  ["Number", "numberSystemConversion.php"],
  ["Pressure", "pressureConversion.php"],
  ["Temperature", "temperatureConversion.php"],
  ["Miles/Hour", "speedConversion.php"],
  ["Foot/Second", "speedConversion.php"],
  ["Meter/Second", "speedConversion.php"],
  ["Kilometer/Hour", "speedConversion.php"],
  ["Knot", "speedConversion.php"],
  ["", ""]
]);
function search() {
  let y = String(document.getElementById("searchInput").value);
  let z = document.getElementById("list");
  let arr = new Array();
  document.querySelector(".drop-down-content").style.display = "block";
  for (let x of keywordValueMap.keys()) {
    let xlwr = x.toLowerCase();
    if (xlwr.startsWith(y.toLowerCase())) {
      console.log(x);
      console.log(y);
      arr.push(x);
    }
  }
  let s = "";
  if (y == "") {
    document.querySelector(".drop-down-content").style.display = "none";
  } else {
    arr.forEach(
      x =>
        (s +=
          "<a href='./" + keywordValueMap.get(x) + "'><li>" + x + "</li></a>")
    );
    if (arr.length == 0) {
      z.innerHTML = "<li>No Matches Found.</li>";
    } else {
      z.innerHTML = s;
    }
  }
}
