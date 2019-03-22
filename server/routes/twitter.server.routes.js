const twitter = require('../controllers/twitter.server.controller.js'),
      express = require('express'),
      router = express.Router();

router.route('/search')
    .post(twitter.search)
    .get(twitter.search);

module.exports = router;
