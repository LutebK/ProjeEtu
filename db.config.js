'use strict';

const mysql = require('mysql');

const dbConn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'projeetu'
});


dbConn.connect(err => {
    console.log('Connected');
});


module.exports = dbConn;