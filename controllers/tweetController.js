let tweets = [];

const getTweets = (req, res) => {
  res.send(tweets)
}

const createTweet = (req, res) => {
  const {
    content,
    userId
  } = req.body

  if (!userId) return res.status(400).send({
    message: "User id is not provided"
  })

  if (content.length > 10) return res.status(400).send({
    message: 'Tweet should be no longer than 10 characters'
  })

  tweets.push(req.body)
  res.send(req.body)
}

module.exports = {
  getTweets,
  createTweet
}