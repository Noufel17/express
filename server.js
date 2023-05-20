const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(logger);
app.get("/", (req, res) => {
  res.render("index", {
    text: "world",
  });
});

function logger(req, res, next) {
  console.log(req.originalUrl);
  next();
}

const userRouter = require("./routes/users");
app.use("/users", userRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
