const express = require("express");
const path = require("path");
require("./db/mongoose");
const termRouter = require("./routers/termRouter");

const app = express();

app.use(express.json()); // Automatically parse JSON
app.use(termRouter);

// Serve static React files from build folder
// for route matching, this must come after other routers
app.use(express.static(path.join(__dirname, "../frontend/build")));
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/build", "index.html"));
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
