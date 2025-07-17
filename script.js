let input = document.getElementById("input-box");
let buttons = document.querySelectorAll("button");

let string = "";
let arr = Array.from(buttons);
arr.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.textContent.trim() === "=") {
      string = eval(string);
      input.value = string;
    } else if (e.target.innerHTML == "AC") {
      string = "";
      input.value = string;
    } else if (e.target.innerHTML == "DEL") {
      string = string.substring(0, string.length - 1);
      input.value = string;
    } else if (e.target.innerHTML == "ᥫ᭡") {
      overlay.style.display = "flex";
    } else {
      string += e.target.innerHTML;
      input.value = string;
    }
  });
});

const overlay = document.createElement("div");
overlay.id = "overlay-card";
overlay.innerHTML = `
  <div class="card">
    <h2>made by Debesh</h2>
    <a href=''
    <button id="close-overlay">x</button>
  </div>
`;
document.body.appendChild(overlay);
overlay.style.display = "none";

document.getElementById("close-overlay").addEventListener("click", () => {
  overlay.style.display = "none";
});
