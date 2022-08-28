const express = require("express");
const app = express();
const path = require("path");
app.use(express.urlencoded({ extended: false }));
app.use(express.json())

app.use(require("./rutas.js"));

app.use(express.static(path.join(__dirname, "./rutas.js")));

app.listen(3000, () => {
  console.log("server activo");
});
