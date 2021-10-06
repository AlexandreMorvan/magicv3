const express = require('express');
const router = express.Router();

const editionController = require('./controllers/editionController');
const cardController = require('./controllers/cardController');
const mainController = require('./controllers/mainController');

router.get('/', mainController.homePage);


router.get('/cards', cardController.getAllCards);
//router.get('/cards/:id', cardController.cardDetail);

router.get('/sets', editionController.listSets);
//router.get('/sets/:id', editionController.listCardByEdition);


module.exports = router;