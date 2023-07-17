require("dotenv").config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 6060;

// // Server 1
const server1 = require('./apps/server1/index.js');
app.use('/server1', server1);

// // Server 2
const server2 = require('./apps/server2/index.js');
app.use('/server2', server2);

app.listen(PORT, () => {
  console.log(`Master backend running at http://localhost:${PORT}`);
});
