let red = document.getElementById("red");
let yellow = document.getElementById("yellow");
let green = document.getElementById("green");

red.addEventListener("click",
function() {
  document.getElementById("textColor").style.color = "red";
  document.getElementById("textColor").style.fontSize = "25px";
  document.getElementById("textColor").style.backgroundColor = "transparent";
}
);
yellow.addEventListener("click",
function() {
  document.getElementById("textColor").style.color = "yellow";
  document.getElementById("textColor").style.fontSize = "20px";
  document.getElementById("textColor").style.backgroundColor = "blue";
}
);
green.addEventListener("click",
function() {
  document.getElementById("textColor").style.color = "green";
  document.getElementById("textColor").style.fontSize = "15px";
  document.getElementById("textColor").style.backgroundColor = "transparent";
}
);