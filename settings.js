// Get the forms
const accountSettingsForm = document.getElementById('account-settings-form');
const notificationPreferencesForm = document.getElementById('notification-preferences-form');
const systemSettingsForm = document.getElementById('system-settings-form');

// Add event listeners to the forms
accountSettingsForm.addEventListener('submit', updatePassword);
notificationPreferencesForm.addEventListener('submit', updateNotificationPreferences);
systemSettingsForm.addEventListener('submit', updateSystemSettings);

// Function to update password
function updatePassword(event) {
  event.preventDefault();
  const currentPassword = document.getElementById('current-password').value;
  const newPassword = document.getElementById('new-password').value;
  const confirmPassword = document.getElementById('confirm-password').value;

  // Validate passwords
  if (newPassword !== confirmPassword) {
    alert('Passwords do not match');
    return;
  }

  // Update password logic goes here
  console.log('Password updated successfully');
}

// Function to update notification preferences
function updateNotificationPreferences(event) {
  event.preventDefault();
  const emailNotifications = document.getElementById('email-notifications').checked;
  const smsNotifications = document.getElementById('sms-notifications').checked;

  // Update notification preferences logic goes here
  console.log('Notification preferences updated successfully');
}

// Function to update system settings
function updateSystemSettings(event) {
  event.preventDefault();
  const language = document.getElementById('language').value;
  const timezone = document.getElementById('timezone').value;

  // Update system settings logic goes here
  console.log('System settings updated successfully');
}