const express = require('express');
const bodyParser = require('body-parser');
const PlantsController = require('./controllers/plants');

const app = express();
app.use(bodyParser.json());

const port = 3000;

app.post('/plant', PlantsController.insertNewPlant);
app.post('/plant/:id', PlantsController.getPlantsById);

app.get('/plants', PlantsController.getPlants);
app.get('/plants/:id', PlantsController.getPlantsById);
app.get('/sunny/:id', PlantsController.getPlantsThatNeedsSunWithId);

app.put('/plant/:id', PlantsController.updatePlantById);

app.delete('/plant/:id', PlantsController.deletePlantById);

app.use(function(err, _req, res, _next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(port, () => console.log(`Example app listening on ${port}!`))
