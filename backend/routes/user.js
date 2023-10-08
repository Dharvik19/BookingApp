const express = require('express');

const router = express.Router();

const controller = require('../controllers/user');
router.post('/details', controller.postDetails);

router.get('/userInfo', controller.getDetails);

router.delete('/del/:id', controller.delete);

module.exports = router;