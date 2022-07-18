const serverless = require("serverless-http");
const express = require("express");
const app = express();

const otherFile = process.env["Other_File"];

app.get("/", (req, res, next) => {
  return res.status(200).json({
    message: "Hello from root!",
  });
});

app.get("/hello", (req, res, next) => {
  return res.status(200).json({
    message: "Hello from path!",
  });
});

app.get("/other_file", (req, res, next) => {
  return res.status(200).json({
    message: otherFile,
  });
});

app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});

module.exports.handler = serverless(app);
