const express = require('express');
const MyController = require('../controllers/MyController');

const router = express.Router();

router.get('/login', MyController.createUser);
router.get('/feature', MyController.getFeature);
router.get('/hero', MyController.getHero);
router.get('/', MyController.Home);
router.get('/pricing', MyController.getPricing);

module.exports = router;


