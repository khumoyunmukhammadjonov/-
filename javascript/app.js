function colors() {
    let red = document.querySelector("#red").value;
    let green = document.querySelector("#green").value;
    let blue = document.querySelector("#blue").value;

    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    document.querySelector("#output").innerHTML = `rgb(${red}, ${green}, ${blue})`;
}


const output = document.querySelector("#output");
output.addEventListener("click", function() {
  if (output.innerText === "rgb(0,0,0)") {
    output.innerText = "No color selected";
    return;
  }
  navigator.clipboard.writeText(output.innerText).then(function() {
    output.innerText = "Copied!";
  }, function(err) {
    output.innerText = "Could not copy";
  });
});
