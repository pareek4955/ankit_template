function login() {
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;
    const error = document.getElementById("error");

    if (user === "ankit" && pass === "password1234") {
        // successful login → go to main page
        window.location.href = "index.html";
    } else {
        // show error message
        error.style.display = "block";
    }
}
