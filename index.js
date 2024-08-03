// JavaScript (e.g., index.js)
fetch('connect.php')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    // Do something with the data
  })
  .catch(error => {
    console.error('Error:', error);
  });
