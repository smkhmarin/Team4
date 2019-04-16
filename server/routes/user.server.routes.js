const users = require('../controllers/user.server.controller.js'),
    express = require('express'),
    router = express.Router();

router.route('/register')
	.post(users.create);
	
router.route('/login')
	.post(users.login);

router.route('/logout')
    .get(users.logout)
	
router.route('/register')
	.post(users.create);

router.route('/:username')
    .get(users.read)
    .put(users.update)
    .delete(users.delete);

module.exports = router;
