const inputGeneratePin = document.getElementById("inputGeneratePin");
const numberButton = document.getElementById("button_number");


document.getElementById("generatePin").addEventListener("click", () => GeneratePin());

function GeneratePin() {
  const pin = Math.round(Math.random() * 1000000);
  inputGeneratePin.value = pin;
};

let myPin = [];
document.getElementById("number").addEventListener("click", function (event) {
  const number = event.target.innerText;
  const value = parseInt(number)
  if (value || value === 0) {
    myPin.push(value);
  };
  const finalPin= myPin.join('');
  document.getElementById("pinShow").value = finalPin;
});
