const PlantsService = require('../services/plants');
const rescue = require('express-rescue')

const insertNewPlant = rescue((req, res) => {
  const { body } = req;
  const newPlant = PlantsService.createNewPlant(body);

  if (!newPlant) return res.status(422).json({ message: 'invalid data' });
  return res.status(201).json(newPlant);
});

const getPlants = rescue((_req, res) => {
  const plants = PlantsService.getPlants();
  return res.status(200).json(plants);
});

const getPlantsById = rescue((req, res) => {
  const { id } = req.params;
  const plant = PlantsService.getPlantById(id);

  if (plant === undefined) return res.status(404).json({ message: 'plant not found' });
  return res.status(200).json(plant);
});

const updatePlantById = rescue((req, res) => {
  const { params: { id }, body } = req;
  const plant = PlantsService.setPlant(id, body);

  if (!plant) return res.status(404).json({ message: 'plant not found' });
  return res.status(200).json(plant);
});

const deletePlantById = rescue((req, res) => {
  const { id } = req.params;
  const deleled = PlantsService.removePlantById(id);

  if (!deleled) return res.status(404).json({ message: 'plant not found' });
  return res.status(200).json({ message: 'plant removed' });
});

const getPlantsThatNeedsSunWithId = rescue((req, res) => {
  const { id } = req.params;
  const plant = PlantsService.getPlantsThatNeedsSunWithId(id);

  if (!plant) return res.status(404).json({ message: 'plant not found' });
  return res.status(200).json(plant);
});

module.exports = {
  insertNewPlant,
  getPlants,
  getPlantsById,
  updatePlantById,
  deletePlantById,
  getPlantsThatNeedsSunWithId
};