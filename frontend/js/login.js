document.querySelector(".close-button").addEventListener("click", () => {
    window.location.href = "index.html"; // redirects to homepage when 'x' is clicked
});

const form = document.getElementById("loginForm");
const errorMsg = document.getElementById("errorMsg");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (username === "admin" && password === "admin") {
    // ✅ Correct credentials
    window.location.href = "admin.html";
    } else {
    // ❌ Wrong credentials
    errorMsg.textContent = "Invalid username or password";
    errorMsg.style.display = "block";

    const formDiv = document.querySelector(".login-form-div");
    formDiv.classList.add("shake");
    setTimeout(() => formDiv.classList.remove("shake"), 400);
    }
});