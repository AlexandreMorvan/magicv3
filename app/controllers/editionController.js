const dataMapper = require('../dataMapper.js')

const editionController = {
  listSets: (req, res) => {
    console.log('on est dans edition controller')
    dataMapper.getAllSets((err, results) => {
      if (err) {
        console.error(err)
        console.log('on est dans le error du edition controller')
        return
      }
      console.log('on est dans le render')
      res.render('sets', {
        sets: results.rows,
      })
    })
  },

  listCardByEdition: (req, res) => {
    console.log('on est dans edition controller')
    const name = req.params.body;
    dataMapper.getOneSet(name, (err, results) => {
      if (err) {
        console.error(err)
        console.log('on est dans le error du edition controller')
        return
      }
      console.log('on est dans le render')
      res.render('sets', {
        sets: results.rows,
      })
    })
  },
}

module.exports = editionController
