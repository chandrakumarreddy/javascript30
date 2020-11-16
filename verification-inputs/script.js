const form = document.querySelector("form");
const inputs = document.querySelectorAll(".inputs input");

function handleKeyPress(e) {
  const input = e.target;
  if (input.value && input.nextElementSibling) {
    input.nextElementSibling.focus();
  }
}

function handlePaste(e) {
  const inputData = e.clipboardData.getData("text");
  inputs.forEach((_input, index) => {
    _input.value = inputData[index] || "";
  });
  if (inputData.length >= 6) {
    form.submit();
  } else {
    document.querySelector(`input[name='n${inputData.length}']`).focus();
  }
}

function handleKeyDown(e) {
  const backButton = e.keyCode === 8 || e.which === 8;
  if (backButton) {
    const input = e.target;
    if (!input.value && input.previousElementSibling) {
      input.previousElementSibling.focus();
    }
  }
}

function handleClick(e) {
  const input = e.target;
  if (input.value !== "Verify") {
    input.select();
    input.setSelectionRange(0, 99999);
    document.execCommand("copy");
  } else {
    form.submit();
  }
}

inputs[0].addEventListener("paste", handlePaste);
form.addEventListener("input", handleKeyPress);
form.addEventListener("keydown", handleKeyDown);
form.addEventListener("click", handleClick);
