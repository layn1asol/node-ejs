const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

const indexRouter = require("./routes/index");
app.use("/", indexRouter);

app.listen(PORT, () => {
    console.log(`Сервер запущено на http://localhost:${PORT}`);
});
