const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db');

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Fetch all users
app.get('/api/users', (req, res) => {
    const sql = 'SELECT * FROM users';
    db.query(sql, (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json(results);
    });
});

// Add a new user
app.post('/api/users', (req, res) => {
    const { username, password, email, role } = req.body;
    const sql = 'INSERT INTO users (username, password, email, role) VALUES (?, ?, ?, ?)';
    db.query(sql, [username, password, email, role], (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json({ id: result.insertId, username, email, role });
    });
});

// Edit a user
app.put('/api/users/:id', (req, res) => {
    const { id } = req.params;
    const { username, email, role } = req.body;
    const sql = 'UPDATE users SET username = ?, email = ?, role = ? WHERE id = ?';
    db.query(sql, [username, email, role, id], (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json({ message: 'User updated successfully' });
    });
});

// Delete a user
app.delete('/api/users/:id', (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM users WHERE id = ?';
    db.query(sql, [id], (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json({ message: 'User deleted successfully' });
    });
});

// Add endpoints for other entities (crops, fields, etc.) in a similar manner

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
