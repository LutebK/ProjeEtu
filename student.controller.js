'use strict';

const Student = require('./student.model');

// Create
exports.create = (req, res) => {
    const newStudent = new Student(req.body);

    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({
            error: true,
            message: 'Please provide all required field'
        });
    } else {
        Student.create(newStudent, (err, student) => {
            if (err) {
                res.send(err);
                res.json({
                    error: false,
                    message: 'Student added successfully!',
                    data: student
                });
            }
        });
    }
}

// Find All
exports.findAll = (req, res) => {
    Student.findAll((err, student) => {
        console.log('controller');
        if (err) {
            res.send(err);
        } else {
            console.log('res', student);
            res.send(student);
        }
    });
}