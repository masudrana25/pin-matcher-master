let inputGeneratedPin = document.getElementById("inputGeneratedPin");

//Generate the pin number
document.getElementById("generatePin").addEventListener("click", () => GeneratePin());
function GeneratePin() {
  const pin = Math.round(Math.random() * 1000000);
  inputGeneratedPin.value = pin;
};

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

document.getElementById("submit").addEventListener("click", function () {
  const generatedPin = document.getElementById("inputGeneratedPin").value;
  const typingPin = document.getElementById("typing_pin").value;
  if (generatedPin === typingPin) {
    document.getElementById("Match").style.display = "block";
    document.getElementById("doNotMatch").style.display = "none";
  }
  else {
    document.getElementById("Match").style.display = "none";
    document.getElementById("doNotMatch").style.display = "block";
    const oldTry = document.getElementById("try").innerText;
    const tryNumber = parseInt(oldTry);
    if (tryNumber > 0) {
      const newTry = tryNumber - 1;
      document.getElementById("try").innerText = newTry;
    };
  };
});
