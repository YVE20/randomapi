# rest-api-indobible
Restful Api Indonesian Bible build on NodeJs

## Authors
- [Priambodo Kurniawan](http://priambodokurniawan.com/)

## Source
- [Sabda Labs](https://labs.sabda.org/API)
- [Our Mana](http://www.ourmanna.com/)

## Server URL :
https://indo-bible.herokuapp.com/ (status : active)

## Get Random Verse
Random verso of Bible on English (NIV Version) and Indonesia (tb/bis)

- ### URL

  `/bible/random`

- ### Method

  `GET`

- ### URL Query

  `ver = 'tb' (default) | 'bis'`

- ### Success Response

  - #### Code: 200
  - #### Content:

  ```
    {
      en: {
        verse: {
          details: {
            text: "Do not merely listen to the word, and so deceive yourselves. Do what it says.",
            reference: "James 1:22",
            version: "NIV",
            verseurl: "http://www.ourmanna.com/"
          },
          notice: "Powered by OurManna.com"
        }
      },
      id: {
        verse: {
          details: {
            text: "Hendaklah kalian melakukan apa yang dikatakan oleh Allah, jangan hanya mendengarkan saja, sehingga dengan demikian kalian menipu diri sendiri.",
            reference: "Yakobus 1:22",
            version: "bis",
            verseurl: "https://alkitab.sabda.org/"
          },
          notice: "Powered by Sabda Labs"
        }
      }
    }
  ```
