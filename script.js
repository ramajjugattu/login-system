// Handle Registration
document.getElementById("registerForm")?.addEventListener("submit", function(e) {
    e.preventDefault();
    let username = document.getElementById("regUser").value;
    let password = document.getElementById("regPass").value;

    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    alert("Registration successful! Please login.");
    window.location.href = "login.html";
});

// Handle Login
document.getElementById("loginForm")?.addEventListener("submit", function(e) {
    e.preventDefault();
    let username = document.getElementById("loginUser").value;
    let password = document.getElementById("loginPass").value;

    let storedUser = localStorage.getItem("username");
    let storedPass = localStorage.getItem("password");

    if (username === storedUser && password === storedPass) {
        window.location.href = "secure.html";
    } else {
        alert("Invalid username or password!");
    }
});

// Logout Function
function logout() {
    window.location.href = "login.html";
}
