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

// GET all courses
app.get('/api/courses', (req, res) => {
    db.all('SELECT * FROM courses', (err, rows) => {
        res.json(rows);
    });
});

// GET a single course by ID
app.get('/api/courses/:id', (req, res) => {
    const id = req.params.id;
    db.all('SELECT * FROM courses WHERE id = ?', [id], (err, rows) => {
        res.json(rows);
    });
})

// POST a new course to the database
app.post('/api/courses', (req, res) => {
    const {courseCode, title, credits, description, semester} = req.body;
    db.run(`
        INSERT INTO courses (courseCode, title, credits, description, semester)
        VALUES (?, ?, ?, ?, ?)
        `, [courseCode, title, credits, description, semester],
        function(err) {
            res.json({ id: this.lastID });
        }
    );
});

// PUT: update existing course in the database
app.put('/api/courses/:id', (req, res) => {
    const id = req.params.id;
    const {courseCode, title, credits, description, semester
} = req.body;
    db.run(`UPDATE courses SET courseCode = ?, title = ?, credits= ?, description = ?, semester = ? WHERE id = ?
        `, [courseCode, title, credits, description, semester, id],
        function(err) {
            res.json({ message: 'Course updated'
            });
        }
    );
});

// DELETE: remove existing course in the database
app.delete('/api/courses/:id', (req, res) => {
    const id = req.params.id;
    db.run(`DELETE FROM courses WHERE id = ?`, [id],
        function(err) {
            res.json({ message: 'Course deleted' });
        }
    );
});