document.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.getElementById("loginBtn");
  const loginInput = document.getElementById("loginInput");
  const changeInfo = document.getElementById("changeInfo");
  const pinInputs = document.querySelectorAll(".pin");
  const verifyBtn = document.getElementById("verifyBtn");

  // Create an error message for the login input
  const errorMessage = document.createElement("p");
  errorMessage.id = "errorMessage";
  errorMessage.style.color = "red";
  errorMessage.style.fontSize = "14px";
  errorMessage.style.marginTop = "5px";
  errorMessage.style.display = "none"; // Hidden initially
  loginInput.insertAdjacentElement("afterend", errorMessage);

  // Create an error message for the PIN inputs
  const pinErrorMessage = document.createElement("p");
  pinErrorMessage.id = "pinErrorMessage";
  pinErrorMessage.style.color = "red";
  pinErrorMessage.style.fontSize = "14px";
  pinErrorMessage.style.marginTop = "5px";
  pinErrorMessage.style.display = "none"; // Hidden initially
  document
    .getElementById("pinContainer")
    .insertAdjacentElement("afterend", pinErrorMessage);

  function isValidEmail(email) {
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
  }

  function isValidPhone(phone) {
    return /^(\+98|0)?9\d{9}$/.test(phone); // Supports Iranian phone numbers
  }

  function validateInput() {
    const value = loginInput.value.trim();
    if (value === "") {
      errorMessage.textContent =
        "لطفاً شماره موبایل یا ایمیل خود را وارد کنید.";
      showError([loginInput], errorMessage);
      return false;
    }
    if (!isValidEmail(value) && !isValidPhone(value)) {
      errorMessage.textContent =
        "لطفاً یک ایمیل یا شماره موبایل معتبر وارد کنید.";
      showError([loginInput], errorMessage);
      return false;
    }
    hideError([loginInput], errorMessage);
    return true;
  }

  function validatePin() {
    let hasError = false;
    pinInputs.forEach((input) => {
      if (input.value.trim() === "") {
        input.style.border = "2px solid red";
        input.style.boxShadow = "0 0 8px red";
        hasError = true;
      } else {
        input.style.border = "2px solid #444"; // Reset correct ones
        input.style.boxShadow = "none";
      }
    });

    if (hasError) {
      pinErrorMessage.textContent = "لطفاً تمام کد تایید ۵ رقمی را وارد کنید.";
      pinErrorMessage.style.display = "block";
      return false;
    } else {
      pinErrorMessage.style.display = "none";
      return true;
    }
  }

  function showError(inputs, messageElement) {
    inputs.forEach((input) => {
      input.style.border = "2px solid red";
      input.style.boxShadow = "0 0 8px red";
    });
    messageElement.style.display = "block"; // Show error message
  }

  function hideError(inputs, messageElement) {
    inputs.forEach((input) => {
      input.style.border = "2px solid #444"; // Default border
      input.style.boxShadow = "none"; // Remove box-shadow
    });
    messageElement.style.display = "none"; // Hide error message
  }

  function resetPinErrors() {
    pinInputs.forEach((input) => {
      input.value = ""; // Clear PIN values
      input.style.border = "2px solid #444"; // Reset border
      input.style.boxShadow = "none"; // Reset shadow
    });
    pinErrorMessage.style.display = "none"; // Hide PIN error message
  }

  function toggleLoginState(showPin = false) {
    document.getElementById("title").style.display = showPin ? "none" : "block";
    document.getElementById("description").style.display = showPin
      ? "none"
      : "block";
    loginInput.style.display = showPin ? "none" : "block";
    loginBtn.style.display = showPin ? "none" : "block";

    document.getElementById("pinDescription").style.display = showPin
      ? "block"
      : "none";
    changeInfo.style.display = showPin ? "inline-block" : "none";
    document.getElementById("pinContainer").style.display = showPin
      ? "flex"
      : "none";
    verifyBtn.style.display = showPin ? "block" : "none";

    if (showPin) {
      pinInputs[0].focus();
    } else {
      resetPinErrors(); // Reset PIN fields when going back
    }
  }

  loginBtn.addEventListener("click", () => {
    if (validateInput()) {
      toggleLoginState(true);
    }
  });

  verifyBtn.addEventListener("click", () => {
    if (validatePin()) {
      alert("ورود موفقیت‌آمیز!");
      window.location.href = "../user-dashboard/index.html"; // Replace with the actual path to your dashboard page

      // Replace with actual submission logic
    }
  });

  changeInfo.addEventListener("click", () => toggleLoginState(false));

  pinInputs.forEach((input, index, inputs) => {
    input.addEventListener("input", (e) => {
      if (e.inputType === "insertText" && e.data && index < inputs.length - 1) {
        inputs[index + 1].focus();
      }
      // Remove red border when the user types
      input.style.border = "2px solid #444";
      input.style.boxShadow = "none";
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
