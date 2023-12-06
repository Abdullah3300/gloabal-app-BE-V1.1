// netlify/functions/myFunction.js
const app = require("../../app"); // Adjust the path accordingly
const serverless = require("serverless-http");

module.exports.handler = serverless(app);
