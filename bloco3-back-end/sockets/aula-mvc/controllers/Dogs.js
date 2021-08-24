const { Router } = require('express');
const rescue = require('express-rescue');
const Joi = require('joi');
const validate = require('../middlewares/validate');
const Dogs = require('../models/Dogs')
const dogs = new Router();

dogs.get('/', rescue(async (_req, res) => {
  const dogs = await Dogs.getAllDogs();

  return res.render('dogs/dogsList', { dogs }); // views/dogsList, dogs(list)
}));

dogs.post(
  '/dogs',
  validate(
    Joi.object({
      name: Joi.string().required().not().empty(),
      age: Joi.number().required().min(1),
    }),
  ),
  rescue(async (req, res) => {
    const { name, age } = req.body; 

    const dogId = await Dogs.createDog(name, age);

    return res.render('dogs/dogCreated', { dogId }); // criar uma view 'dogCriated'
  })
);

dogs.get(
  '/details/:id',
  rescue(async (req, res) => {
    const { id } = req.params;

    const dog = await Dogs.getDog(id);

    return res.render('dogs/details', { dog });
  })
);

dogs.post(
  '/deletedog',
  validate(
    Joi.object({
      id: Joi.string().required().not().empty(),
    })
  ),
  rescue(async (req, res) => {
    const { id } = req.body;
    await Dogs.deleteDog(id);
    return res.render('dogs/deleted');
  })
);

module.exports = dogs;