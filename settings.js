function saveSettings(event) {
    event.preventDefault();
  
    const form = document.getElementById('settingsForm');
    const formData = new FormData(form);
  
    // Save settings logic here (e.g., send to server or store locally)
    console.log('Settings saved:', formData);
  
    // Clear form
    form.reset();
  
    alert('Settings saved successfully!');
  }