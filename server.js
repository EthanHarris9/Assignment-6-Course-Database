// setting up REST API and importing sqlite3 package
const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const app = express();
const port = 3000;

// Middleware
app.use(express.json());

// Connect to the database 
const db = new
sqlite3.Database('./database/university.db');
