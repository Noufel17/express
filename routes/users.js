const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  console.log(req.query.name);
  res.send("users list");
});

router.get("/new", (req, res) => {
  res.render("users/new", { firstname: "TEST" });
});

router.post("/", (req, res) => {
  console.log(req.body.firstname);
  res.send(`User ${req.body.firstname} created`);
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
