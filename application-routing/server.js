// Express is to Servers what React is to HTML!!

const express = require("express");
const mathRoutes = require("./routes/math");
const stringRoutes = require("./routes/strings");

const app = express();

// route for math
app.use("/math", mathRoutes);
app.use("/strings", stringRoutes);

app.listen(3001, () => {
  console.log("The server is listening... 🐒");
});
