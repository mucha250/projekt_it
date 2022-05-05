const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const req = require("express/lib/request");
const res = require("express/lib/response");
const createCsvWriter = require("csv-writer").createObjectCsvWriter;
const csvWriter = createCsvWriter({
  path: "C:/Users/korda/Desktop/pracownicy.csv",
  header: [
    { id: "id", title: "Imie" },
    { id: "username", title: "Nazwisko" },
    { id: "email", title: "Mail adres" },
    { id: "password", title: "Nr telefonu" },
    { id: "rights", title: "Stanowisko" },
  ],
});

const app = express();

app.use(
  cors() //{
  //origin: "*",
  //})
);

//app.use(express());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "users",
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("MySql Connected...");
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

app.post("/register", (req, res) => {
  const usernameREQ = req.body.username;
  const emailREQ = req.body.email;
  const passwordREQ = req.body.password;

  console.log(usernameREQ);
  console.log(emailREQ);
  console.log(passwordREQ);

  if (usernameREQ != "" && usernameREQ != "" && usernameREQ != "") {
    let user = {
      username: usernameREQ,
      email: emailREQ,
      password: passwordREQ,
    };
    let sql = "INSERT INTO users SET ?";
    let query = db.query(sql, user, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.send("User table inserted...");
    });
  } else {
    res.send("Catched null...");
  }
});

app.post("/login", (req, res) => {
  const emailREQ = req.body.email;
  const passwordREQ = req.body.password;

  console.log("backend");
  console.log(emailREQ);
  console.log(passwordREQ);
  console.log("backend");

  db.query(
    "SELECT * FROM users WHERE email = ? AND password = ?",
    [emailREQ, passwordREQ],
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }

      if (result.length > 0) {
        res.send(result);
        console.log("ZALOGOWANO");
      } else {
        res.send({ message: "Wrong login/pass" });
      }
    }
  );
});

app.post("/laptopy", (req, res) => {
  const firmaREQ = req.body.firma;
  const modelREQ = req.body.model;
  const procesorREQ = req.body.procesor;
  const ramREQ = req.body.ram;

  console.log(firmaREQ);
  console.log(modelREQ);
  console.log(procesorREQ);
  console.log(ramREQ);

  if (firmaREQ != "") {
    let fm = {
      firma: firmaREQ,
      model: modelREQ,
      procesor: procesorREQ,
      ram: ramREQ,
    };
    let sql = "INSERT INTO laptopy SET ?";
    let query = db.query(sql, fm, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.send("dodano");
    });
  } else {
    res.send("błąd");
  }
});

app.post("/w", (req, res) => {
  const firmaREQ = req.body.firma;
  const modelREQ = req.body.model;
  const procesorREQ = req.body.procesor;
  const ramREQ = req.body.ram;

  console.log(firmaREQ);
  console.log(modelREQ);
  console.log(procesorREQ);
  console.log(ramREQ);

  if (firmaREQ != "") {
    let fm = {
      firma: firmaREQ,
      model: modelREQ,
      procesor: procesorREQ,
      ram: ramREQ,
    };
    let sql = "INSERT INTO laptopy SET ?";
    let query = db.query(sql, fm, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.send("dodano");
    });
  } else {
    res.send("błąd");
  }
});

app.get("/getitem", (req, res) => {
  let sql = "SELECT * from laptopy where id = 1";
  let query = db.query(sql, (err, results) => {
    if (err) {
      throw err;
    }
    console.log(results);
    res.send(results);
  });
});

app.get("/gettel", (req, res) => {
  let sql = "SELECT * from telefony where id = 1";
  let query = db.query(sql, (err, results) => {
    if (err) {
      throw err;
    }
    console.log(results);
    res.send(results);
  });
});

app.get("/getUser", (req, res) => {
  let sql = "SELECT * from pracownicy";
  let query = db.query(sql, (err, results) => {
    if (err) {
      throw err;
    }
    console.log(results);
    res.send(results);
  });
});

app.get("/getPracownicyCsv", (req, res) => {
  let sql = "SELECT * from users";
  let query = db.query(sql, async (err, results) => {
    if (err) {
      console.log("w ifie");
      throw err;
    }
    console.log(`results = ${results}`);
    //res.send(results);

    try {
      const wynik = await csvWriter.writeRecords(results);
      console.log(`wynik = ${wynik}`);
    } catch (err) {
      console.log(`err = ${err}`);
    }
    res.send(results);
  });
});

app.listen("8081", () => {
  console.log("running server server");
});
