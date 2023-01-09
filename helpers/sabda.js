const sabdaVerseUrl = process.env.URL_SABDA_VERSE
const axios = require('axios')
const parseString = require('xml2js').parseStringPromise;

module.exports = {
  requestSabda (verse, ver) {
    return new Promise ((resolve, reject) => {
      axios.get(sabdaVerseUrl + verse + '&ver=' + ver)
        .then(({data}) => {
          xml = data
          return parseString(xml);
        })
        .then(verse => {
          let obj = {
            verse: {
              details: {
                text: '',
                reference: verse.bible.title[0],
                version: ver,
                verseurl: 'https://alkitab.sabda.org/'
              },
              notice: 'Powered by Sabda Labs'
            }
          }

          let verseArr = []
          verse.bible.book[0].chapter[0].verses[0].verse.forEach((el, i) => {
            verseArr.push(el.text[0])
          })
          obj.verse.details.text = verseArr.join(' ')

          resolve(obj)
        })
        .catch(err => reject(err))
    })
  }
}