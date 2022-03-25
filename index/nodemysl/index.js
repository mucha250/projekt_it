const express = require("express");
const mysql = require("mysql");

//app.use(express());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "password",
    database: "users",
});

db.connect((err) => {
    if(err){
        throw(err);
    }
    console.log('MySql Connected...');
});

const app = express();
app.use(express.json());

// Create DB

// app.get('/createdb', (req, res) => {
//     let sql = 'CREATE DATABASE nodemysql';
//     db.query(sql, (err,result) => {
//         if(err) {
//             console.log("Err");
//             throw err;
//         }
//         console.log(result);
//         res.send('Database created...');
//     });
// })

// app.get('/createpoststable', (req, res) => {
//     let sql = 'CREATE TABLE posts(id int AUTO_INCREMENT, title VARCHAR(255), body VARCHAR(255), PRIMARY KEY(id))';
//     db.query(sql, (err, result) => {
//         if(err) throw err
//         console.log(result);
//         res.send('Posts table created...');
//     });
// });

app.get('/register', (req, res) => {

    const usernameREQ = req.body.username;
    const emailREQ = req.body.email;
    const passwordREQ = req.body.password;

    let user = {username: usernameREQ, email: emailREQ, password: passwordREQ};
    let sql = 'INSERT INTO users SET ?';
    let query = db.query(sql, user, (err, result) => {
        if(err) throw err
        console.log(result);
        res.send('User table inserted...');
    });
});

app.listen('3000', () => {
    console.log("running server");
});