const express = require('express');

const router = express.Router();

const studentController = require('./student.controller');

// Retrieve all students
// GET
router.get('/', studentController.findAll);

// Create a new student
// POST
router.post('/', studentController.create);

module.exports = router;