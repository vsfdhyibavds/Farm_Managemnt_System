// PHP script (e.g., connect.php)
<?php
$servername = "your_servername";
$username = "your_username";
$password = "your_password";
$dbname = "your_database";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Example query
$sql = "SELECT * FROM your_table";
$result = $conn->query($sql);

// ... process results and return as JSON ...

$conn->close();
?>
