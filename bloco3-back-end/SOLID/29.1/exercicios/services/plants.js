const defaultPlants = require('../models/defaultPlants');

const calculateWaterFrequency = (needsSun, size, origin) => {
  if (needsSun) return size * 0.77 + (origin === 'Brazil' ? 8 : 7) 
  return (size / 2) * 1.33 + (origin === 'Brazil' ? 8 : 7)
}

const initPlant = (id, { breed, needsSun, origin, specialCare, size }) => {
  const waterFrequency = calculateWaterFrequency(needsSun, size, origin);
  const newPlant = {
    id,
    breed,
    needsSun,
    origin,
    specialCare: {
      waterFrequency,
      ...specialCare,
    },
    size,
  };
  return newPlant;
};

let createdPlants = defaultPlants.length;
const createNewPlant = (plant) => {
  const mappedPlant = initPlant(createdPlants++, { ...plant });
  defaultPlants.push(mappedPlant);
  return defaultPlants;
};

const getPlants = () => {
  return defaultPlants;
};

const getPlantById = (id) => {
  return defaultPlants.filter((plant) => plant.id === id);
};

const removePlantById = (id) => {
  return defaultPlants.filter((plant) => plant.id !== id);
};

const filterPlantsNeedSun = (id) => {
  return defaultPlants.filter((plant) => plant.id === id && plant.needsSun);
}

const getPlantsThatNeedsSunWithId = (id) => {
  const plantsNeedSum = filterPlantsNeedSun(id);
  return plantsNeedSum.filter(({ specialCare: { waterFrequency } }) => waterFrequency > 2);
};

const setPlant = (plantId, ...newPlant) => {
  return defaultPlants.map((plant) => {
    if (plant.id === plantId) return newPlant;
    return plant;
  });
};

module.exports = {
  createNewPlant,
  setPlant,
  getPlantsThatNeedsSunWithId,
  removePlantById,
  getPlantById,
  getPlants,
}