const express = require('express');

const Hobbits = require('../hobbits/hobbitsModel.js');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
  res.status(200).json({ api: 'up' });
});

server.get('/hobbits', (req, res) => {
  Hobbits.getAll()
    .then(hobbits => {
      res.status(200).json(hobbits);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

server.post('/hobbits', (req, res) => {
  // add a role to the database
  Roles.find()
    .insert(req.body, 'id')
    .then(ids => {
    res.status(201).json(ids);
  }).catch(error => {
    res.status(500).json(error);
  });
});

server.delete('/hobbits', (req, res) => {
  // add a role to the database
  Roles.find()
    .remove(req.body, 'id')
    .then(ids => {
    res.status(200).json(ids);
  }).catch(error => {
    res.status(500).json(error);
  });
});
module.exports = server;