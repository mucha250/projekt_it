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

app.get("/getlaptop", (req, res) => {
  let sql = "SELECT * from laptopy;";
  let query = db.query(sql, (err, results) => {
    if (err) {
      throw err;
    }
    console.log(results);
    res.send(results);
  });
});


// wyswietlanie
app.get("/getapar", (req, res) => {
  let sql = "SELECT * from aparaty;";
  let query = db.query(sql, (err, results) => {
    if (err) {
      throw err;
    }
    console.log(results);
    res.send(results);
  });
});

app.get("/getdruk", (req, res) => {
  let sql = "SELECT * from drukarki;";
  let query = db.query(sql, (err, results) => {
    if (err) {
      throw err;
    }
    console.log(results);
    res.send(results);
  });
});

app.get("/getlapt", (req, res) => {
  let sql = "SELECT * from laptopy;";
  let query = db.query(sql, (err, results) => {
    if (err) {
      throw err;
    }
    console.log(results);
    res.send(results);
  });
});

app.get("/getlic", (req, res) => {
  let sql = "SELECT * from licencje;";
  let query = db.query(sql, (err, results) => {
    if (err) {
      throw err;
    }
    console.log(results);
    res.send(results);
  });
});

app.get("/getmod", (req, res) => {
  let sql = "SELECT * from modemy;";
  let query = db.query(sql, (err, results) => {
    if (err) {
      throw err;
    }
    console.log(results);
    res.send(results);
  });
});

app.get("/getmon", (req, res) => {
  let sql = "SELECT * from monitory;";
  let query = db.query(sql, (err, results) => {
    if (err) {
      throw err;
    }
    console.log(results);
    res.send(results);
  });
});

app.get("/getper", (req, res) => {
  let sql = "SELECT * from peryferia;";
  let query = db.query(sql, (err, results) => {
    if (err) {
      throw err;
    }
    console.log(results);
    res.send(results);
  });
});

app.get("/getproc", (req, res) => {
  let sql = "SELECT * from procesory;";
  let query = db.query(sql, (err, results) => {
    if (err) {
      throw err;
    }
    console.log(results);
    res.send(results);
  });
});

app.get("/gettel", (req, res) => {
  let sql = "SELECT * from telefony;";
  let query = db.query(sql, (err, results) => {
    if (err) {
      throw err;
    }
    console.log(results);
    res.send(results);
  });
});

app.get("/getton", (req, res) => {
  let sql = "SELECT * from tonery;";
  let query = db.query(sql, (err, results) => {
    if (err) {
      throw err;
    }
    console.log(results);
    res.send(results);
  });
});



app.get("/getUser", (req, res) => {
  let sql = "SELECT * from users";
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


app.post('/licencja', (req, res) => {

  const nazwaREQ = req.body.nazwa;
  const kluczREQ = req.body.klucz;

  console.log(nazwaREQ);
  console.log(kluczREQ);

  if(nazwaREQ != "" && kluczREQ != ""){

      let licencja = {nazwa: nazwaREQ, klucz_produktu: kluczREQ};
      let sql = 'INSERT INTO licencje SET ?';
      let query = db.query(sql, licencja, (err, result) => {
          if(err) throw err
          console.log(result);
          res.send('Licencja table inserted...');
      });
  }
  else{
      res.send('Catched null...');
  }
});

app.post('/usun', (req, res) => {

  const nazwaREQ = req.body.nazwa;
  

  console.log(nazwaREQ);
 

  if(nazwaREQ != ""){

      let licencja = {nazwa: nazwaREQ};
      let sql = 'delete from `licencje` where ?';
      let query = db.query(sql, licencja, (err, result) => {
          if(err) throw err
          console.log(result);
          res.send('Licencja table droped...');
      });
  }
  else{
      res.send('Catched null...');
  }
});

app.post('/usunaparat', (req, res) => {

  const typREQ = req.body.typ;
  

  console.log(typREQ);
 

  if(typREQ != ""){

      let licencja = {typ: typREQ};
      let sql = 'delete from `aparaty` where ?';
      let query = db.query(sql, licencja, (err, result) => {
          if(err) throw err
          console.log(result);
          res.send('Licencja table droped...');
      });
  }
  else{
      res.send('Catched null...');
  }
});

app.post('/usunlaptop', (req, res) => {

  const nazwa_w_domenieREQ = req.body.nazwa_w_domenie;
  

  console.log(nazwa_w_domenieREQ);
 

  if(nazwa_w_domenieREQ != ""){

      let licencja = {nazwa_w_domenie: nazwa_w_domenieREQ};
      let sql = 'delete from `laptopy` where ?';
      let query = db.query(sql, licencja, (err, result) => {
          if(err) throw err
          console.log(result);
          res.send('Licencja table droped...');
      });
  }
  else{
      res.send('Catched null...');
  }
});



app.post('/peryferia', (req, res) => {

  const nazwaREQ = req.body.nazwa;
  const typREQ = req.body.typ;

  if(nazwaREQ != "" && typREQ != ""){

      let peryferia = {typ_peryferii: typREQ, nazwa: nazwaREQ};
      let sql = 'INSERT INTO peryferia SET ?';
      let query = db.query(sql, peryferia, (err, result) => {
          if(err) throw err
          console.log(result);
          res.send('Peryferia table inserted...');
      });
  }
  else{
      res.send('Catched null...');
  }
});

app.post('/aparaty', (req, res) => {

  const typREQ = req.body.typ;
  const obiektywREQ = req.body.obiektyw;
  const pamiecREQ = req.body.pamiec;
  
  let aparaty = {typ: typREQ, obiektyw: obiektywREQ, pamiec: pamiecREQ};
  let sql = 'INSERT INTO aparaty SET ?';
  let query = db.query(sql, aparaty, (err, result) => {
      if(err) throw err
      console.log(result);
      res.send('Aparaty table inserted...');
  });
  
}); 


app.listen("3000", () => {
  console.log("running server server");
});
