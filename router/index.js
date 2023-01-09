const router = require('express').Router()
const bibleRouter = require('./bible')

router.get('/', (req, res) => {
  res.status(200).json({
    msg: 'app is running'
  })
})
router.use('/bible', bibleRouter)

module.exports = router