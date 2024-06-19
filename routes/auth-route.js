const express = require("express");

const authRouter = express.Router();

authRouter.post("/register", (req, res) => {
  console.log("Register...");
});

module.exports = authRouter;
