const router = require('express').Router();

const {
  checkApi,
  checkPostApi
} = require('../controllers/apiCheckController')
const {
  getTweets,
  createTweet
} = require('../controllers/tweetController')

// galima "chainint" (det i grandine) requesto metodus
router.route('/apiCheck')
  .get(checkApi)
  .post(checkPostApi)

// tweets
router.route('/tweet')
  .post(createTweet)
  .get(getTweets)



module.exports = router