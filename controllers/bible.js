const axios = require('axios')
const randomVerseUrl = process.env.URL_RANDOM_VERSE
const { requestSabda } = require('../helpers/sabda')

class BibleController {
  static random (req, res, next) {
    let ver = req.query.ver || 'tb'
    let randomVerse = {}
    
    axios.get(randomVerseUrl)
      .then(({data}) => {
        return data
      })
      .then(data => {
        let verse = data.verse.details.reference
        randomVerse = data
        return requestSabda(verse, ver)
      })
      .then(verse => {
        res.status(200).json(
          {
            en: randomVerse,
            id: verse
          }
        )
      })
      .catch(err => next(err))
  }
}

module.exports = BibleController