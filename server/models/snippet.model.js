const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Snippet
const snippetSchema = new Schema(
  {
    title: {
      type: String,
    },
    body: {
      type: String,
    },
    tag: {
      type: String,
    },
  },
  {
    collection: 'snippets',
  }
);

module.exports = mongoose.model('Snippet', snippetSchema);
