const router = require('express').Router()
const bibleController = require('../controllers/bible')

router.get('/random', bibleController.random)

module.exports = router