// netlify/functions/myFunction.js
const app = require("../../app"); // Adjust the path accordingly
const serverless = require("serverless-http");

app.use("/.netlify/functions/api", app.router);
module.exports.handler = serverless(app);
