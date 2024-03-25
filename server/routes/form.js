const router = require("express").Router();
const { Form, validateForm } = require("../modules/Form");
const { NewForm, validateNewForm } = require("../modules/NewForm");


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

router.get('/checkEmail', async (req, res) => {
  const email = req.query.email;
  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  try {
    const form = await Form.findOne({ email });
    if (form) {
      return res.json({ exists: true });
    } else {
      return res.json({ exists: false });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Server error' });
  }
});

router.post("/newForm", async (req, res) => {
  const { error } = validateNewForm(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const { name, email, link, rights } = req.body;

  let form = await NewForm.findOne({ email });
  if (form) return res.status(400).send("Email already exists");

  form = new NewForm({
    name,
    email,
    link,
    rights,
  });

  try {
    form = await form.save();
    res.send(form);
  } catch (ex) {
    console.error(ex.message);
    res.status(500).send("Something failed.");
  }
});



module.exports = router;