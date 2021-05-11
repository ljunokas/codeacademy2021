const router = require('express').Router();

const {
  testMiddleware
} = require('../middleware/testMiddleware')

const {
  checkApi,
  checkPostApi
} = require('../controllers/apiCheckController')
const tweetController = require('../controllers/tweetController')
const userController = require('../controllers/userController')
const authenticateMiddleware = require('../middleware/authenticate')

// galima "chainint" (det i grandine) requesto metodus
// pridedame middleware "testMiddleware" funckija prie get metodo
router.route('/apiCheck')
  .get(testMiddleware, checkApi)
  .post(testMiddleware, checkPostApi)

// tweets
router.route('/tweet')
  .post(authenticateMiddleware.authenticate, tweetController.createTweet)
  .get(tweetController.getTweets)
router.route('/tweet/like')
  .post(tweetController.likeTweet)


// user
router.route('/user/signUp').post(userController.signUp)
router.route('/user/signIn').post(userController.signIn)
router.route('/user/currentUser').get(userController.currentUser)
router.route('/user/logOut').post(userController.logOut)
router.route('/user/getAllUsers').get(userController.getAllUsers)





module.exports = router