const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

app.use(
    cors({
        origin: "*",
    })
)

//app.use(express());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    database: "users",
});

db.connect((err) => {
    if(err){
        throw(err);
    }
    console.log('MySql Connected...');
});

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


app.post('/register', (req, res) => {

    const usernameREQ = req.body.username;
    const emailREQ = req.body.email;
    const passwordREQ = req.body.password;

    console.log(usernameREQ);
    console.log(emailREQ);
    console.log(passwordREQ);

    if(usernameREQ != "" && usernameREQ != "" && usernameREQ != ""){

        let user = {username: usernameREQ, email: emailREQ, password: passwordREQ};
        let sql = 'INSERT INTO users SET ?';
        let query = db.query(sql, user, (err, result) => {
            if(err) throw err
            console.log(result);
            res.send('User table inserted...');
        });
    }
    else{
        res.send('Catched null...');
    }
});

app.post('/login', (req, res) => {

    const emailREQ = req.body.email;
    const passwordREQ = req.body.password;

    console.log("backend");
    console.log(emailREQ);
    console.log(passwordREQ);
    console.log("backend");

    db.query(
        "SELECT * FROM users WHERE email = ? AND password = ?",
        [emailREQ,passwordREQ],
        (err, result) => {
            if(err) {
                res.send({err: err});
            }

            if(result.length > 0) {
                res.send(result);
                console.log("ZALOGOWANO");
            }else{
                res.send({message: "Wrong login/pass"});
            }
        }
    );
});

app.post('/laptopy', (req, res) => {

    const firmaREQ = req.body.firma;
    const modelREQ = req.body.model;
    const procesorREQ = req.body.procesor;
    const ramREQ = req.body.ram;

    
    console.log(firmaREQ);
    console.log(modelREQ);
    console.log(procesorREQ);
    console.log(ramREQ);
   
        if(firmaREQ != ""){

            
        let fm = {firma: firmaREQ, model: modelREQ, procesor: procesorREQ, ram: ramREQ};
        let sql = 'INSERT INTO laptopy SET ?';
        let query = db.query(sql, fm, (err, result) => {
        if(err) throw err
        console.log(result);
        res.send('dodano');
        });
        }
        else{
            res.send('błąd');
        }
    

});




app.listen('8080', () => {
    console.log("running server");
});