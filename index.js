const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const port = 3001;
require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(require("./routes/todo.route"));
mongoose
  .connect("mongodb+srv://iznor:iznor95_95@cluster0.nswbshu.mongodb.net/")
  .then(() => console.log('"УСПЕШНО СОЕДЕНИЛИСЬ С СЕРВЕРОМ MongoDB"'))
  .catch((req, res) => console.log("ОШИБКА ПОДКЛЮЧЕНИЯ К СЕРВЕРУ", req));

app.listen(port, (req, res) => {
  console.log("СЕРВЕР ЗАПУЩЕН");
});
