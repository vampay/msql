var mysql = require('mysql');//เรียกใช้mysql
var con = mysql.createConnection({//เชื่อมกับฐานข้อมูลและตั้งค่าparamiter
    //con ย่อมาจาก connection
    host: "localhost",
    user: "root",
    password: ""

});
//เช็คการเชื่อมต่อ
con.connect(function(err) {
    if (err) throw err; //ถ้าแสดงไม่ได้จะ error แต่ถ้าเชื่อมได้จะขึ้นConnected!
    console.log("Connected!");

});

