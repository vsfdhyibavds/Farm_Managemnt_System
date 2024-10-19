// database.js

const mysql = require('mysql2');

/**
 * Database connection settings
 */
const connection = mysql.createConnection({
    host: 'localhost 3306',
    user: 'root',
    password: '',
    database: 'farm_management_system'
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

module.exports = { connection, closeDatabaseConnection };