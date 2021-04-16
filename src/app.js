const express = require("express");
const path = require("path");
const cors = require("cors");
require("./db/mongoose");
const termRouter = require("./routers/termRouter");
const app = express();

const whitelist = [
  "http://localhost:3000",
  "http://localhost:8080",
  "https://evening-atoll-30144.herokuapp.com/",
];
const corsOptions = {
  origin: true,
  // origin: function (origin, callback) {
  //   console.log(`Origin of request ${origin}`);
  //   if (whitelist.indexOf(origin) !== -1 || !origin) {
  //     console.log("Origin accepted");
  //     callback(null, true);
  //   } else {
  //     console.log("Origin rejected");
  //     callback(new Error("Now allowed by CORS"));
  //   }
  // },
};

app.use(cors(corsOptions));
// app.use(cors());
app.use(express.json()); // Automatically parse JSON
app.use(termRouter);

// Serve static React files from build folder
// for route matching, this must come after other routers
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/build", "index.html"));
  });
}

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
