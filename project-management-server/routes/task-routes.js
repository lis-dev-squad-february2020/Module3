const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Project = require('../models/project-model');
const Task = require('../models/task-model');

// GET route => to retrieve a specific route
router.get('/tasks/:id', (req, res) => {
  Task.findById(req.params.id)
    .then(task => {
      res.json(task)
    })
});


// POST route => to create a new task
router.post('/tasks', (req, res) => {
  Task.create({
    title: req.body.title,
    description: req.body.description,
    project: req.body.project
  })
  .then(response => {
    Project.findByIdAndUpdate(req.body.project, {
      $push: { tasks: response._id }
    })
    .then((response) => {
      res.json(response);
    })
  })
});

module.exports = router
