let tweets = [];

const getTweets = (req, res) => {
  res.send(tweets)
}

const createTweet = (req, res) => {
  tweets.push(req.body)
  res.send(req.body)
}

module.exports = {
  getTweets,
  createTweet
}