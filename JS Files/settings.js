document.getElementById('update-password-form').addEventListener('submit', updatePassword);
document.getElementById('update-email-form').addEventListener('submit', updateEmail);
document.getElementById('delete-account-button').addEventListener('click', deleteAccount);

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

function updateEmail(event) {
  event.preventDefault();

  // Get the new email value
  const newEmail = document.getElementById('new-email').value;

  // Send a request to the server to update the email
  fetch('/update-email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      newEmail
    })
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        displaySuccessMessage('Email updated successfully.');
      } else {
        displayErrorMessage('Error: Unable to update email.');
      }
    })
    .catch((error) => {
      console.error(error);
      displayErrorMessage('Error: Unable to update email.');
    });
}

function deleteAccount() {
  // Confirm the deletion with the user
  const confirmation = confirm('Are you sure you want to delete your account? This action cannot be undone.');

  if (confirmation) {
    // Send a request to the server to delete the account
    fetch('/delete-account', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          displaySuccessMessage('Account deleted successfully.');
          // Optionally redirect to a different page or log out the user
          window.location.href = '/login';
        } else {
          displayErrorMessage('Error: Unable to delete account.');
        }
      })
      .catch((error) => {
        console.error(error);
        displayErrorMessage('Error: Unable to delete account.');
      });
  }
}

function displayErrorMessage(message) {
  const messageDiv = document.getElementById('message');
  messageDiv.innerHTML = `<p style="color: red;">${message}</p>`;
}

function displaySuccessMessage(message) {
  const messageDiv = document.getElementById('message');
  messageDiv.innerHTML = `<p style="color: green;">${message}</p>`;
}