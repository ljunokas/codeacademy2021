const router = require('express').Router();

const {
  testMiddleware
} = require('../middleware/testMiddleware')

const {
  checkApi,
  checkPostApi
} = require('../controllers/apiCheckController')
const {
  getTweets,
  createTweet
} = require('../controllers/tweetController')

const userController = require('../controllers/userController')

// galima "chainint" (det i grandine) requesto metodus
// pridedame middleware "testMiddleware" funckija prie get metodo
router.route('/apiCheck')
  .get(testMiddleware, checkApi)
  .post(testMiddleware, checkPostApi)

// tweets
router.route('/tweet')
  .post(createTweet)
  .get(getTweets)


// user
router.route('/user/signUp').post(userController.signUp)
router.route('/user/signIn').post(userController.signIn)
router.route('/user/currentUser').get(userController.currentUser)
router.route('/user/logOut').post(userController.logOut)




module.exports = router