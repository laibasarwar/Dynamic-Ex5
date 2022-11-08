const express = require("express");
const firebase = require("firebase/app");

const app = express();
const port = process.env.PORT || 4000;

const firebaseConfig = {
  apiKey: "AIzaSyDpVJuW-7VboKP4oouQzb2psHPHoDGhElE",
  authDomain: "exercise-five-fall-2022-e77cd.firebaseapp.com",
  projectId: "exercise-five-fall-2022-e77cd",
  storageBucket: "exercise-five-fall-2022-e77cd.appspot.com",
  messagingSenderId: "233096557785",
  appId: "1:233096557785:web:3ce023b6b5fb22c2cf7ac8",
  measurementId: "G-HF3JMTQG2C",
};

firebase.initializeApp(firebaseConfig);

const indexRoute = require("./routes/index");
const singlePostRoute = require("./routes/singlePost");

app.use("/", indexRoute);
app.use("/post", singlePostRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
