const passwordinput = document.getElementById("password");
const lengthOfPassword = 16;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const symbols = "~!@#$%^&*()_+{}|<>?/.,][{}|=-";
const numbers = "0123456789";
const allChars = upperCase + lowerCase + symbols + numbers;
const generateButton = document.getElementById("generate");
generateButton.addEventListener("click", generatePassword);
function generatePassword() {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += symbols[Math.floor(Math.random() * symbols.length)];
  password += numbers[Math.floor(Math.random() * numbers.length)];
  while (password.length < lengthOfPassword) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  passwordinput.value = password;
}
const copy = document.getElementById("copy");
copy.addEventListener("click", copyPassword);
async function copyPassword() {
  const password = passwordinput.value;
  if ((password === "")) {
    alert("password is Empty");
    return;
  }

  try {
    await navigator.clipboard.writeText(password);
    alert("Password copied to clipboard!");
  } catch (err) {
    console.error("Failed to copy password: ", err);
    alert("Failed to copy password. Please try again.");
  }
}
