const Joi = require("joi");

function validateForm(form) {
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
