const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("users list");
});

router.get("/new", (req, res) => {
  res.send("new user");
});

router.post("/", (req, res) => {
  res.send("create user");
});

router
  .route("/:id")
  .get((req, res) => {
    const userId = req.params.id;
    console.log(req.user);
    res.send(`get user with id ${userId}`);
  })
  .put((req, res) => {
    res.send("update user");
  })
  .delete((req, res) => {
    res.send("delete user");
  });
users = [{ name: "oussama" }, { name: "3li" }];
router.param("id", (req, res, next, id) => {
  req.user = users[id];
  next();
});

module.exports = router;
