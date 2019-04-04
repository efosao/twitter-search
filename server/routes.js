const express = require('express')
const _ = require('lodash')
const router = express.Router()

router.get('/search', async (req, res) => {
  return res.json({ hello: true })
})

module.exports = router
