let inputGeneratedPin = document.getElementById("inputGeneratedPin");

//Generate the pin number
document.getElementById("generatePin").addEventListener("click", () => GeneratePin());
function GeneratePin() {
  const pin = Math.round(Math.random() * 1000000);
  inputGeneratePin.value = pin;
};
let myPin = '';
document.getElementById("input_text").addEventListener("click", function (event) {
  let typing_pin = document.getElementById("typing_pin");
  let pinValue = typing_pin.value;
  const input = event.target.innerText;

  if (isNaN(input)) {

    if (input === 'C') {
      typing_pin.value = '';
      myPin = '';
    };

    if (input === '<') {
      const oldPin = pinValue.split('');
      oldPin.pop();
      const newPin = oldPin.join('');
      myPin = newPin;
      typing_pin.value = newPin;
    };
  }
  
  else {
    const newPin = pinValue + input;
    typing_pin.value = newPin;
  };

});

