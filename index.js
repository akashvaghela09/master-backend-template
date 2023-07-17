require("dotenv").config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 6060;

// Import your app here


app.listen(PORT, () => {
  console.log(`Master backend running at http://localhost:${PORT}`);
});
