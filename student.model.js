'use strict';

var dbConn = require('./db.config');

var Student = (student) => {
    this.first_name = student.first_name;
    this.last_name = student.last_name;
    this.class = student.class;
    this.number = student.number;
}

// Create Students
Student.create = (newStudent, result) => {
    dbConn.query("INSERT INTO students set ?", newStudent, (err, res) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            console.log(res);
            result(null, res);
        }
    });
}

// Find all students
Student.findAll = (result) => {
    dbConn.query("SELECT * FROM students", (err, res) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            console.log(res);
            result(null, res);
        }
    });
}

module.exports = Student;