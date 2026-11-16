const sqlite3 = require('sqlite3').verbose();

// Create/connect to the database file

const db = new
sqlite3.Database('./database/university.db');
console.log('Connected to SQLite database')


