var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost:3306",
  user: "root",
  password: ""
});

con.connect(function(err) {
  console.log(err);
  console.log("Connected!");
});


