const sqlite3 = require('sqlite3').verbose();

// Create/connect to the database file
const db = new
sqlite3.Database('./database/university.db');
console.log('Connected to SQLite database')

// Create courses table
db.run(`
    CREATE TABLE courses (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        courseCode TEXT,
        title TEXT,
        credits INTEGER,
        description TEXT,
        semester TEXT
    )
`);

console.log('courses table created')


