// setting up REST API and importing sqlite3 package
const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Restaurant API server running at http://localhost:${port}/api`);
});

// Middleware
app.use(express.json());

// Connect to the database 
const db = new
sqlite3.Database('./database/university.db');

// GET all course
app.get('/api/courses', (req, res) => {
    db.all('SELECT * FROM courses', (err, rows) => {
        res.json(rows);
    });
});

