const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Project = require('../models/project-model');


//GET route => to get all the projects
router.get('/projects', (req, res) => {
  console.log('user', req.user);
  // Gets data from mongoDB
  Project.find()
    .then(allProjects => {
      // will do something with the result
      res.json(allProjects);
    })
    .catch(err => {
      // will do something else
      res.json(err);
    })
});


//POST route => to create a new project
router.post('/projects', (req, res) => {
  const { title, description } = req.body;
  Project.create({
    title,
    description,
    tasks: []
  })
    .then(response => {
      res.json(response);
    })
    .catch(err => {
      res.json(err);
    })
});


//GET route => get a specific project using the id
router.get('/projects/:id', (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({message: 'id is not valid'});
    return;
  }
  
  Project.findById(req.params.id)
    // getting all the tasks for this project
    .populate('tasks')
    .then(project => {
      res.json(project);
    })
    .catch(error => {
      res.json(error);
    })
});

// PUT route => to update a specific project
router.put('/projects/:id', (req, res) => {
  Project.findByIdAndUpdate(req.params.id, req.body)
      .then((response) => {
        res.json({ message: `Project ${response} was updated succesfully`});
      })
      .catch(error => {
        res.json(error);
      }) 
});


// DELETE route => to delete a specific project
router.delete('/projects/:id', (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: 'Specified id is not valid'});
  }

  Project.findByIdAndDelete(req.params.id)
    .then((response) => {
      res.json({ message: response})
    })
    .catch(error => {
      res.status(500).json({ message: `Error occurred: ${error}`});
    });
});

module.exports = router;