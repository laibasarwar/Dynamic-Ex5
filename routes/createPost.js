const express = require("express");
const router = express.Router();
const firestore = require("firebase/firestore");

const db = firestore.getFirestore();

const createPostForm = `
<h1>Create Post</h1>
<form action="/create/submit">
<div style=dusplay:flex; flex-direction:column;max-width:400px">
  <input type="text"name=postTitle placeHolder="Title"/><form>
  <input type="text"name=postText placeHolder="Text"/><form>
  <input type="text"name=author placeHolder="Author"/><form>
  <button type="submit">Submit</button>
  </form>
`;

router.use((req, res, next) => {
  next();
});

router.get("/", (req, res) => {
  res.send(createPostForm);
});

router.get("/submit", (req, res) => {
  const queryParams = req.query;
  const title = queryParams.postTitle;
  const text = queryParams.postText;
  const author = queryParams.author;

  const idFromTitle = title.replace(/\s+/g, "-").toLowerCase();

  const setBlogPost = firestore.setDoc(
    firestore.doc(db, "posts", idFromTitle),
    {
      title: title,
      text: text,
      author: author,
    }
  );

  setBlogPost
    .then((response) => {
      res.send(`<h1>Submission Successful</h1>
      <p><a href="/create">Add Another Post</a></p>
      <p><a href="/"Return Home<a></p>`);
    })
    .catch((error) => {
      console.warn(error);
      res.send(`Error Submitting: ${error.toString()}`);
    });
});

module.exports = router;
