// dbConnection.js

const mysql = require('mysql');

/**
 * Database connection settings
 */
const connection = mysql.createConnection({
    host: 'localhost', // or your MySQL server address
    port: 3306,        // default MySQL port
    user: 'your_username', // replace with your MySQL username
    password: 'your_password', // replace with your MySQL password
    database: 'your_database' // replace with your database name
});

/**
 * Connect to the database
 */
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database: ' + err.stack);
        return;
    }
    console.log('Connected to the database as ID ' + connection.threadId);
});

/**
 * Close the database connection
 */
function closeDatabaseConnection() {
    connection.end((err) => {
        if (err) {
            console.error('Error closing the connection: ' + err.stack);
            return;
        }
        console.log('Database connection closed.');
    });
}

// Export the connection and close function for use in other modules
module.exports = { connection, closeDatabaseConnection };