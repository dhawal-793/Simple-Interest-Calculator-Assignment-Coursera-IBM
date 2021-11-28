function show_value(x) {
  document.getElementById("slider_value").innerHTML = x + "%";
}
function increment() {
  document.getElementById("rate").value =
    parseFloat(document.getElementById("rate").value) + 0.1;
  x = parseFloat(document.getElementById("rate").value);
  document.getElementById("slider_value").innerHTML = x + "%";
}
function decrement() {
  document.getElementById("rate").value =
    parseFloat(document.getElementById("rate").value) - 0.1;
  x = parseFloat(document.getElementById("rate").value);
  document.getElementById("slider_value").innerHTML = x + "%";
}

function compute() {
  p = document.getElementById("principal").value;
  r = parseFloat(document.getElementById("rate").value);
  y = document.getElementById("years").value;
  i = (p * r * y) / 100;
  y1 = new Date().getFullYear();
  y2 = parseInt(y) + y1;
  result = document.getElementById("result");
  if (p <= 0) {
    alert(
      "Alert !!! \n" + "Please enter a positive number as the principal amount."
    );
  } else {
    result.innerHTML =
      "If you deposit " +
      p +
      ",\nat an interest rate of " +
      r +
      "%.\nYou will recieve an amount of " +
      i +
      ",\nin the year " +
      y2;
  }
}
