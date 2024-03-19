const router = require("express").Router();
const { Form, validateForm } = require("../modules/Form");

router.post("/", async (req, res) => {
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
    res.status(500).send("Something failed.");
  }
});

module.exports = router;