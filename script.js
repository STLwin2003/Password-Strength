let password = document.getElementById("password");
let message = document.getElementById("message");
let strength = document.getElementById("strength");

password.addEventListener("input", () => {
  if (password.value.length > 0) {
    message.style.display = "block";
  } else {
    message.style.display = "none";
  }

  if (password.value.length <= 4) {
    strength.innerHTML = " weak";
    message.style.color = "red";
  } else if (password.value.length <= 7) {
    strength.innerHTML = " medium";
    message.style.color = "orange";
  } else {
    strength.innerHTML = " strong";
    message.style.color = "green";
  }
});
