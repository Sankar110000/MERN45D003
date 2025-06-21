const loginBtn = document.getElementById("login-button");
const signupLink = document.getElementById("signup-link");

const signupbtn = document.getElementById("singup-button");
const loginLink = document.getElementById("login-link");

const loginForm = document.getElementById("login-container");
const signupForm = document.getElementById("signup-container");

const alert = document.getElementById('alert')

let onLoginPage = false;

loginBtn.addEventListener("click", () => {
  const inputs = document.querySelectorAll(".login-input");
  const username = inputs[0].value;
  const password = inputs[1].value;
  const storage = localStorage.getItem("user");

  const user = JSON.parse(storage);
  console.log(user.username, user.password);
  
  if (user.username === username && user.password === password) {
    console.log("Logged in successfully");
    alert.innerHTML = "Logged in successfully"
    alert.style.display = 'block'
    setTimeout(() => alert.style.display = 'none', 800)

  } else {
    console.log("Invalid credentials");
    
    alert.innerHTML = 'Invalid credentials'
    alert.style.backgroundColor = 'red'
    alert.style.display = 'block'
    setTimeout(() => alert.style.display = 'none', 800)
  }

  inputs[0].value = "";
  inputs[1].value = "";
});

loginLink.addEventListener("click", () => {
  loginForm.style.display = "block";
  signupForm.style.display = "none";
});

signupLink.addEventListener("click", () => {
  loginForm.style.display = "none";
  signupForm.style.display = "block";
});

signupbtn.addEventListener("click", () => {
  const inputs = document.querySelectorAll(".singup-input");
  const username = inputs[0];
  const phone = inputs[1];
  const email = inputs[2];
  const password = inputs[3];
  const userObj = {
    username: username.value,
    email: email.value,
    phone: phone.value,
    password: password.value,
  };
  localStorage.setItem("user", JSON.stringify(userObj));
  loginForm.style.display = "block";
  signupForm.style.display = "none";

  inputs[0].value = "";
  inputs[1].value = "";
  inputs[2].value = "";
  inputs[3].value = "";
});

alert.addEventListener('click', () => {
    alert.style.display = "none"
})