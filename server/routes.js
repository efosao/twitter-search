const express = require('express')
const Twitter = require('twitter')

const router = express.Router()

const client = new Twitter({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token_key: process.env.ACCESS_TOKEN_KEY,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET
})

router.get('/search/:screen_name', async (req, res) => {
  const { screen_name: username } = req.params
  const params = { ...req.params, count: 10 }
  client.get('statuses/user_timeline', params, (error, tweets, response) => {
    if (!error) {
      return res.json({
        tweets,
        username
      })
    } else {
      return res.json({ error })
    }
  })
})

module.exports = router
