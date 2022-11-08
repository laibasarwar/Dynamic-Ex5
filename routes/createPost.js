const express = require("express");
const router = express.Router();

const createPostForm = `
<h1>Create Post</h1>
<form action="">
<input type="text"name=title placeHolder="Title"/><form>
`;

router.use((req, res, next) => {
  next();
});

router.get("/", (req, res) => {
  res.send(createPostForm);
});

module.exports = router;
