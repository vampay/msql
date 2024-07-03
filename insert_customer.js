var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mydb" 
});

con.connect(function(err) {//เช็คว่าเชื่อมได้มั้ย
    if (err) throw err;
    console.log("Connected!");//INSERT ข้อมูล
    

var sql = `INSERT INTO Customer (name, address) VALUES ?`;
var values=[
    ['Jason','Highway 37'],
    ['vampay','Highway 38'],
    ['aom','Highway 39'],
    ['king','Highway 37'],
    ['nuree','Highway 40']
];

     con.query(sql, [values],function (err, result) {//เช็คว่าINSERTได้มั้ย
          if (err) throw err; 
          console.log("Customer Created.");
    });
});