const express = require('express');
const router = express.Router();
const userController = require('../Controllers/UserController');


router.get('/:id', userController.getUserData);

module.exports = router;
