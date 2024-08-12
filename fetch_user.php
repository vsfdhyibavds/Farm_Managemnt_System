<?php
// fetch_user.php

$id = $_GET['id'];

// Connect to database and retrieve user data
// ...

$user = array(
    'id' => $id,
    'username' => 'John Doe',
    'role' => 'Admin',
    'email' => 'john.doe@example.com'
);

header('Content-Type: application/json');
echo json_encode($user);
?>