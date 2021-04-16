const mongoose = require("mongoose");

const termSchema = new mongoose.Schema({
  term: {
    type: String,
    required: true,
    trim: true,
  },
  definition: {
    type: String,
    required: true,
    trim: true,
  },
});

const Term = mongoose.model("Term", termSchema);

module.exports = Term;
