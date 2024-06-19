const express = require("express");

const authRouter = express.Router();

authRouter.post("/login", (req, res) => {
  console.log("Login...");
});

module.exports = authRouter;
