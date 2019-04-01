const users = require('../controllers/user.server.controller.js'),
    express = require('express'),
    router = express.Router();

router.route('/')
    .post(users.create);

router.route('/:username')
    .get(users.read)
    .put(users.update)
    .delete(users.delete);

module.exports = router;
