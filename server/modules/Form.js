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

const Form = mongoose.model("form", FormSchema);

const Joi = require("joi");

const validateForm = (form) => {
  const schema = Joi.object({
    fullName: Joi.string().required(),
    country: Joi.string().required(),
    artistName: Joi.string().required(),
    birthDate: Joi.date().required(),
    email: Joi.string().email().required(),
    musicRole: Joi.string().required(),
    labelName: Joi.string().required(),
    profileImage: Joi.string().uri().required(),
    ISRCAgency: Joi.string().required(),
    relevantLink: Joi.string().uri().required(),
  });

  return schema.validate(form);
}

module.exports = { Form, validateForm };

