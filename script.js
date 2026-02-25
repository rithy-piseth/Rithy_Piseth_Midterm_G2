function checkPassword() {
    var password = document.getElementById("password").value;
    var feedback = document.getElementById("feedback");

    var rules = 0;

    if (password.length >= 8) {
        rules++;
    }

    if (/[0-9]/.test(password)) {
        rules++;
    }

    if (/[!@#$%^&*]/.test(password)) {
        rules++;
    }

    if (rules <= 1) {
        feedback.innerHTML = "Weak Password";
        feedback.style.color = "red";
    } else if (rules == 2) {
        feedback.innerHTML = "Medium Password";
        feedback.style.color = "orange";
    } else {
        feedback.innerHTML = "Strong Password";
        feedback.style.color = "green";
    }
}

function loginUser(event) {
    event.preventDefault();
    var role = document.getElementById("role").value;

    if (role == "nurse") {
        window.location = "nurse.html";
    } else {
        window.location = "admin.html";
    }
}

function togglePassword() {
    var passwordInput = document.getElementById("password");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
}