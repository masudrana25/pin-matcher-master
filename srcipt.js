const inputGeneratePin = document.getElementById("inputGeneratePin");
document.getElementById("generatePin").addEventListener("click", () => GeneratePin());

function GeneratePin() {
  const pin = Math.round(Math.random() * 1000000);
  inputGeneratePin.value = pin;
}