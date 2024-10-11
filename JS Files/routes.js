const express = require('express');
const router = express.Router();
const db = require('../database');

// Get all users
router.get('/', (req, res) => {
    db.query('SELECT * FROM users', (err, results) => {
        if (err) {
            res.status(500).send(err.message);
        } else {
            res.json(results);
        }
    });
});

// Add a new user
router.post('/', (req, res) => {
    const { username, password, email, role } = req.body;
    db.query('INSERT INTO users (username, password, email, role) VALUES (?, ?, ?, ?)', 
    [username, password, email, role], (err, result) => {
        if (err) {
            res.status(500).send(err.message);
        } else {
            res.status(201).json({ id: result.insertId });
        }
    });
});

// Update a user
router.put('/:id', (req, res) => {
    const { username, password, email, role } = req.body;
    const { id } = req.params;
    db.query('UPDATE users SET username = ?, password = ?, email = ?, role = ? WHERE id = ?', 
    [username, password, email, role, id], (err, result) => {
        if (err) {
            res.status(500).send(err.message);
        } else {
            res.json({ changes: result.changedRows });
        }
    });
});

// Delete a user
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM users WHERE id = ?', id, (err, result) => {
        if (err) {
            res.status(500).send(err.message);
        } else {
            res.json({ changes: result.affectedRows });
        }
    });
});

module.exports = router;
