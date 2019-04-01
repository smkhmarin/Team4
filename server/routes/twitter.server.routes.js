const twitter = require('../controllers/twitter.server.controller.js'),
      express = require('express'),
      router = express.Router();

router.route('/search')
    .post(twitter.search);

router.route('/trending')
    .get(twitter.currentlyTrending);

router.route('/trending/tweets')
    .get(twitter.trendingTweets);

module.exports = router;
