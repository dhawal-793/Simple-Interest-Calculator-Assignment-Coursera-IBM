function show_value(x) {
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
