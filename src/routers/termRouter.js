const express = require("express");
const router = express.Router();
const Term = require("../models/term");

router.post("/terms", async (req, res) => {
  const term = new Term(req.body);

  try {
    await term.save();
    res.status(201).send({ term });
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/terms", async (req, res) => {
  try {
    const terms = await Term.find({}).sort({ term: "asc" });
    res.send({ terms });
  } catch (error) {
    res.status(400).send(error);
  }
});

router.patch("/terms", async (req, res) => {
  const updatedTerm = req.body;

  try {
    const term = await Term.findById(updatedTerm._id);
    term.term = updatedTerm.term;
    term.definition = updatedTerm.definition;
    term.favourite = updatedTerm.favourite;
    await term.save();
    res.send(term);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.delete("/terms", async (req, res) => {
  const termId = req.body._id;
  try {
    const term = await Term.findById(termId);
    await term.remove();
    res.send(term);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
