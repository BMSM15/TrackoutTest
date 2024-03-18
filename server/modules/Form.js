const mongoose = require("mongoose");

const FormSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  artistName: {
    type: String,
    required: true,
  },
  birthDate: {
    type: Date,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  musicRole: {
    type: String,
    required: true,
  },
  labelName: {
    type: String,
    required: true,
  },
  profileImage: {
    type: String,
    required: true,
  },
  ISRCAgency: {
    type: String,
    required: true,
  },
  relevantLink: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Form", FormSchema);
