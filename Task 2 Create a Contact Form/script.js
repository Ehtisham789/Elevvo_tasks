const form = document.getElementById("contactForm");
const successMsg = document.getElementById("successMsg");

const fields = [
  { id: "name", message: "Full name is required" },
  { id: "email", message: "Valid email is required" },
  { id: "subject", message: "Subject is required" },
  { id: "message", message: "Message cannot be empty" }
];

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function showError(input, message) {
  input.parentElement.querySelector(".error").textContent = message;
}

function clearError(input) {
  input.parentElement.querySelector(".error").textContent = "";
}

form.addEventListener("submit", e => {
  e.preventDefault();
  let valid = true;

  fields.forEach(field => {
    const input = document.getElementById(field.id);
    const value = input.value.trim();

    if (!value) {
      showError(input, field.message);
      valid = false;
    } else {
      clearError(input);
    }

    if (field.id === "email" && value && !isValidEmail(value)) {
      showError(input, "Please enter a valid email address");
      valid = false;
    }
  });

  if (valid) {
    successMsg.textContent = "Thank you! Your message has been sent.";
    form.reset();
    setTimeout(() => successMsg.textContent = "", 4000);
  }
});
