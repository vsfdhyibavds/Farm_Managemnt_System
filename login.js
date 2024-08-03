// login.js

function login() {
    // Prevent the default form submission
    event.preventDefault();

    // Get the input values
    const farmId = document.getElementById('farm-id').value;
    const password = document.getElementById('password').value;

    // Example of simple validation
    if (farmId === "admin" && password === "admin123") {
        // Redirect to the dashboard if login is successful
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid Farm ID or Password");
    }
}

function register() {
    // Prevent the default form submission
    event.preventDefault();

    // Get the input values
    const farmName = document.getElementById('farm-name').value;
    const farmEmail = document.getElementById('farm-email').value;
    const password = document.getElementById('farm-password').value;
    const repeatPassword = document.getElementById('farm-repeat-password').value;

    // Example of simple validation
    if (password === repeatPassword) {
        // Here you would normally send a request to the server to register the new farm
        // For this example, we just redirect to the dashboard
        window.location.href = "dashboard.html";
    } else {
        alert("Passwords do not match");
    }
}
