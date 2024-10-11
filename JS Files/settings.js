// Function to update the password
function updatePassword(event) {
  event.preventDefault();

  // Get the form values
  const currentPassword = document.getElementById('current-password').value;
  const newPassword = document.getElementById('new-password').value;
  const confirmPassword = document.getElementById('confirm-password').value;

  // Validate the password inputs
  if (newPassword !== confirmPassword) {
    displayErrorMessage('Error: New password and confirm password do not match.');
    return;
  }

  // Check password length and strength
  if (newPassword.length < 8) {
    displayErrorMessage('Error: Password must be at least 8 characters long.');
    return;
  }

  // Send a request to the server to update the password
  fetch('/update-password', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      currentPassword,
      newPassword
    })
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        displaySuccessMessage('Password updated successfully.');

        // Store the new password in local storage
        localStorage.setItem('password', newPassword);
      } else {
        displayErrorMessage('Error: Unable to update password.');
      }
    })
    .catch((error) => {
      console.error(error);
      displayErrorMessage('Error: Unable to update password.');
    });
}