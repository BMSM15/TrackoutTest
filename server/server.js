require("dotenv").config();
const express = require('express');
const app = express();
const { mongoose } = require('mongoose');
const cors = require('cors');
const passport = require('passport'); 
const cokkieSession = require('cookie-session');
const passportSetup = require('./PASSPORT.JS');
const authRoute = require('./routes/auth');


async function connect() {
  try {
    await mongoose.connect(process.env.URI);
    console.log("Connect to MongoDB");
  } catch (error) {
    console.error(error);
  }
}

app.use(
  cokkieSession({
    name: "session",
    keys: ["prismlabs"],
    maxAge: 24 * 60 * 60 * 100,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(
  cors(
  {
    origin: "http://localhost:3000",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  }));

connect();

app.use("/auth", authRoute);

const port = process.env.PORT || 5000;
app.listen(port, () => { console.log(`Server is running on port ${port}...`)});