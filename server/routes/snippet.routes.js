const express = require('express');
const snippetRoutes = express.Router();
let Snippet = require('../models/snippet.model.js');
// Define your routes here

snippetRoutes.route('/add').post(function (req, res) {
  console.log(req.body);
  let snipet = new Snippet(req.body);
  snipet
    .save()
    .then(() => {
      res.status(200).json({ business: 'business in added successfully' });
    })
    .catch(() => {
      res.status(400).send('unable to save to database');
    });
});

// Defined get data(index or listing) route
snippetRoutes.route('/').get(function (req, res) {
  Snippet.find()
    .then((snippets) => {
      res.json(snippets);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

// Defined edit route
snippetRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Snippet.findById(id)
    .then((snippet) => {
      if (!snippet) {
        res.status(404).json({ error: 'Snippet not found' });
      } else {
        res.json(snippet);
      }
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

snippetRoutes.route('/view/:id').get(function (req, res) {
  let id = req.params.id;
  Snippet.findById(id)
    .then((snippet) => {
      if (snippet) {
        res.json(snippet);
      } else {
        res.status(404).json({ error: 'Snippet not found' });
      }
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

//  Defined update route
snippetRoutes.route('/update/:id').post(async function (req, res) {
  try {
    const updatedSnippet = await Snippet.findByIdAndUpdate(
      req.params.id,
      {
        title: req.body.title,
        body: req.body.body,
        tag: req.body.body,
      },
      { new: true }
    );

    if (updatedSnippet) {
      res.json('Update complete');
    } else {
      res.status(404).send('Snippet not found');
    }
  } catch (err) {
    res.status(500).send('Unable to update the database');
  }
});

// Defined delete | remove | destroy route
snippetRoutes.route('/delete/:id').delete(async function (req, res) {
  try {
    const deletedSnippet = await Snippet.findOneAndDelete({ _id: req.params.id });
    if (deletedSnippet) {
      res.json('Successfully removed');
    } else {
      res.status(404).json({ error: 'Snippet not found' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = snippetRoutes;
