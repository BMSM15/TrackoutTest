const mongoose = require('mongoose');
const Joi = require('joi');

const formSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  rights: {
    master: { type: Boolean, default: false },
    mechanical: { type: Boolean, default: false },
    performance: { type: Boolean, default: false },
    neighboring: { type: Boolean, default: false },
  },
});

const NewForm = mongoose.model('newform', formSchema);

const validateNewForm = (newform) => {
    const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    link: Joi.string().uri().required(),
    rights: Joi.object({
      master: Joi.boolean(),
      mechanical: Joi.boolean(),
      performance: Joi.boolean(),
      neighboring: Joi.boolean(),
    }).required(),
  });
  
  return schema.validate(newform);
}
  
module.exports = { NewForm, validateNewForm };