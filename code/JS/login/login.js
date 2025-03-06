document.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.getElementById("loginBtn");
  const changeInfo = document.getElementById("changeInfo");
  const pinInputs = document.querySelectorAll(".pin");

  function toggleLoginState(showPin = false) {
    document.getElementById("title").style.display = showPin ? "none" : "block";
    document.getElementById("description").style.display = showPin
      ? "none"
      : "block";
    document.getElementById("loginInput").style.display = showPin
      ? "none"
      : "block";
    document.getElementById("loginBtn").style.display = showPin
      ? "none"
      : "block";

    document.getElementById("pinDescription").style.display = showPin
      ? "block"
      : "none";
    document.getElementById("changeInfo").style.display = showPin
      ? "inline-block"
      : "none";
    document.getElementById("pinContainer").style.display = showPin
      ? "flex"
      : "none";
    document.getElementById("verifyBtn").style.display = showPin
      ? "block"
      : "none";

    if (showPin) {
      pinInputs[0].focus();
    }
  }

  loginBtn.addEventListener("click", () => toggleLoginState(true));
  changeInfo.addEventListener("click", () => toggleLoginState(false));

  pinInputs.forEach((input, index, inputs) => {
    input.addEventListener("input", (e) => {
      if (e.inputType === "insertText" && e.data && index < inputs.length - 1) {
        inputs[index + 1].focus();
      }
    });

    input.addEventListener("keydown", (e) => {
      if (e.key === "Backspace" && index > 0 && input.value === "") {
        inputs[index - 1].focus();
      }
    });

    input.addEventListener("keypress", (e) => {
      if (!/[0-9]/.test(e.key)) {
        e.preventDefault();
      }
    });
  });
});
