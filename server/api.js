const express = require('express');
const app = express();

app.get("/test", (req, res, next)=>{
  res.send({
    a: 1
  })
});

// Export the server middleware
module.exports = {
  path: '/api',
  handler: app
};
