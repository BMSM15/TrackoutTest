require("dotenv").config();
const express = require('express');
const app = express();
const { mongoose } = require('mongoose');
const cors = require('cors');
const passport = require('passport'); 
const cokkieSession = require('cookie-session');
const passportSetup = require('./PASSPORT.JS');
const authRoute = require('./routes/auth');
const validateForm = require('./routes/form');


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

app.post('/api/forms', async (req, res) => {
  const { error } = validateForm(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let form = new Form({
    fullName: req.body.fullName,
    country: req.body.country,
    artistName: req.body.artistName,
    birthDate: req.body.birthDate,
    email: req.body.email,
    musicRole: req.body.musicRole,
    labelName: req.body.labelName,
    profileImage: req.body.profileImage,
    ISRCAgency: req.body.ISRCAgency,
    relevantLink: req.body.relevantLink,
  });

  try {
    form = await form.save();
    res.send(form);
  } catch (ex) {
    // Log the exception for debugging purposes
    console.error(ex.message);
    res.status(500).send('Something failed.');
  }
});

const port = process.env.PORT || 5000;
app.listen(port, () => { console.log(`Server is running on port ${port}...`)});