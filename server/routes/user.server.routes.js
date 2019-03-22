const users = require('../controllers/listings.server.controller.js'), 
    express = require('express'),
    router = express.Router();

router.route('/')
    .get(users.list)
    .post(users.create);

router.route('/:username')
    .get(users.read)
    .put(users.update)
    .delete(users.delete);

module.exports = router;
