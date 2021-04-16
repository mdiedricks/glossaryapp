const express = require("express");
const router = express.Router();
const Term = require("../models/term");

// * Create term
router.post("/terms", async (req, res) => {
  const term = new Term(req.body);

  try {
    await term.save();
    res.status(201).send({ term });
  } catch (error) {
    res.status(400).send(error);
  }
});

// * Get terms
router.get("/terms", async (req, res) => {
  try {
    const terms = await Term.find({});
    res.send({ terms });
  } catch (error) {
    res.status(400).send(error);
  }
});

// * Patch term
router.patch("/terms/:id", async (req, res) => {
  const updatedTerm = req.body;

  try {
    const term = await Term.findById(req.params.id);
    term.term = updatedTerm.term;
    term.definition = updatedTerm.definition;
    await term.save();
    res.send(term);
  } catch (error) {
    res.status(400).send(error);
  }
});

// * Delete term
router.delete("/terms/:id", async (req, res) => {
  const termId = req.params.id;

  try {
    const term = await Term.findById(termId);
    await term.remove();
    res.send(term);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
