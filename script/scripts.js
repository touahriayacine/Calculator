//global variables
var stack = [];

//changing mode :
function ApplyNightMode() {
  document
    .getElementById("night-mode-img")
    .setAttribute("src", "../assets/images/sun.png");
  var nightModeButton = document.getElementById("night-mode-button");
  nightModeButton.style.setProperty(
    "background-color",
    "var(--light-night-mode-button)"
  );
  var nightModeBG = document.getElementById("bg-img");
  nightModeBG.style.setProperty(
    "background-image",
    "linear-gradient(0deg, rgba(46,46,46,1) 0%, rgba(90,90,90,1) 100%),url('')"
  );
  nightModeBG.style.setProperty("filter", "blur(0px)");
  var frameNightColor = document.getElementById("calculator");
  frameNightColor.style.setProperty(
    "background-color",
    "var(--dark-frame-color)"
  );
  var textColor = document.body;
  textColor.style.setProperty("color", "var(--dark-color)");
  var history = document.getElementById("history");
  history.style.setProperty("background-color", "var(--dark-history-color)");
  var clearColor = document.getElementById("clear");
  clearColor.style.setProperty("color", "var(--dark-clear-color)");
  var nightOutputColor = document.getElementById("output");
  nightOutputColor.style.setProperty(
    "background-color",
    "var(--dark-output-color)"
  );
  var lightModeButton = document.getElementById("night-mode-button");
  lightModeButton.setAttribute("onclick", "ApplyLightMode()");
}
function ApplyLightMode() {
  document
    .getElementById("night-mode-img")
    .setAttribute("src", "../assets/images/night.svg");
  var nightModeButton = document.getElementById("night-mode-button");
  nightModeButton.style.setProperty(
    "background-color",
    "var(--dark-night-mode-button)"
  );
  var nightModeBG = document.getElementById("bg-img");
  nightModeBG.style.setProperty(
    "background-image",
    "url(../assets/images/img1)"
  );
  nightModeBG.style.setProperty("filter", "blur(12px)");
  var frameNightColor = document.getElementById("calculator");
  frameNightColor.style.setProperty(
    "background-color",
    "var(--light-frame-color)"
  );
  var textColor = document.body;
  textColor.style.setProperty("color", "var(--light-color)");
  var history = document.getElementById("history");
  history.style.setProperty("background-color", "var(--light-history-color)");
  var clearColor = document.getElementById("clear");
  clearColor.style.setProperty("color", "var(--light-clear-color)");
  var nightOutputColor = document.getElementById("output");
  nightOutputColor.style.setProperty(
    "background-color",
    "var(--light-output-color)"
  );
  var lightModeButton = document.getElementById("night-mode-button");
  lightModeButton.setAttribute("onclick", "ApplyNightMode()");
}

//calculator functions
function clearAll() {
  document.getElementById("histOut").innerHTML = "";
}
function EraseAll(t) {
  var i = t.length;
  while (i !== 0) {
    t.pop();
    i--;
  }
  document.getElementById("output").innerHTML = "0";
}
function Pressed(t, x) {
  var i = t.length;
  if (i === 0) {
    document.getElementById("output").innerHTML = x;
  } else {
    document.getElementById("output").innerHTML += x;
  }
  t[i] = x;
}
function PError(t) {
  EraseAll(t);
  document.getElementById("output").innerHTML = "Error";
  setTimeout(function () {
    document.getElementById("output").innerHTML = "0";
  }, 500);
}
function Delete(t) {
  var x = t.length;
  if (x > 1) {
    t.pop();
    document.getElementById("output").innerHTML = t.join("");
  } else {
    t.pop();
    document.getElementById("output").innerHTML = "0";
  }
}
function Calculate(t) {
  try{
    var x = t.join("");
    x = eval(x);
    EraseAll(t);
    t.push(x);
    document.getElementById("output").innerHTML = x;
    document.getElementById("histOut").innerHTML += x + "<br>";
  }
  catch(e){
    PError(t);
  }
}