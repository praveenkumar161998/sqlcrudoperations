const sqlite3 = require('sqlite3').verbose();
let sql;

// connect to database
const db = new sqlite3.Database("test.db",sqlite3.OPEN_READWRITE,(err)=>{
    if (err) return console.error(err.message);    
});

// create tables 
// sql = `CREATE TABLE users(id INTEGER PRIMARY KEY,first_name,last_name,username,password,email)`;
// db.run(sql);
// db.run("DROP TABLE users");

    // insert into db
    sql = `INSERT INTO users(first_name,last_name,username,password,email) VALUES (?,?,?,?,?)`;
    db.run(sql,["anjali", "anjalison","anjali_user","test","mikeanjali@gmail.com"],
     (err)=>{
        if (err) return console.error(err.message);
    });
    // sql = `INSERT INTO users(first_name,last_name,username,password,email) VALUES (?,?,?,?,?)`;
    // db.run(sql,["praveen", "praveenson","praveen_user","pptest","praveen@gmail.com"],
    //  (err)=>{
    //     if (err) return console.error(err.message);
    // });
    // query the data
    // sql = `INSERT INTO users(first_name,last_name,username,password,email) VALUES (?,?,?,?,?)`;
    // db.run(sql,["san", "son","son_user","sontest","son@gmail.com"],
    //  (err)=>{
    //     if (err) return console.error(err.message);
    // });    
    sql = 'select * FROM users';
db.all(sql,[],(err,rows) => {
    if (err) return console.error(err.message);
    rows.forEach(row => {
        console.log(row);
    });
});

// update data

// sql = `UPDATE users SET first_name = ? WHERE id = ?`;
// db.run(sql,["praveen", 1], (err) => {
//     if (err) return console.error(err.message);
// });
