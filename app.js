const express = require("express");
const bodyParser = require("body-parser");
const apiRoutes = require("./routes/api");


const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use("/api", apiRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
