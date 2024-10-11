// login.js

function login() {
  event.preventDefault();
  const farmId = document.getElementById('farm-id').value;
  const password = document.getElementById('password').value;

  if (farmId === "admin" && password === "admin123") {
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid Farm ID or Password");
  }
}

function register() {
  event.preventDefault();
  const farmName = document.getElementById('farm-name').value;
  const farmEmail = document.getElementById('farm-email').value;
  const password = document.getElementById('farm-password').value;
  const repeatPassword = document.getElementById('farm-repeat-password').value;

  if (password === repeatPassword) {
    const formData = {
      farmName,
      farmEmail,
      password
    };

    fetch('/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        window.location.href = "dashboard.html";
      } else {
        alert("Registration failed. Please try again.");
      }
    })
    .catch(error => {
      console.error('Error registering farm:', error);
      alert("Registration failed. Please try again.");
    });
  } else {
    alert("Passwords do not match");
  }
}