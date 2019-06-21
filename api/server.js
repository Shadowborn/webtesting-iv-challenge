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
  Hobbits.getAll()
    .insert(req.body, 'id')
    .then(ids => {
    res.status(201).json(ids);
  }).catch(error => {
    res.status(500).json(error);
  });
});

server.delete('/:id', (req, res) => {
  // remove roles (inactivate the role)
  Hobbits.getAll()
  .where({id: req.params.id})
  .del()
  .then(count => {
    if(count > 0) {
      const unit = count > 1 ? 'records' : 'record';
      res.status(200).json({message: `${count} ${unit} deleted`})
    } else {
      res.status(404).json({message: 'Hobbit not found'});
    }
  }).catch(error => {
    res.status(500).json(error);
  });
});



module.exports = server;