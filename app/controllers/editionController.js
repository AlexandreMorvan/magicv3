const dataMapper = require('../dataMapper.js')

const editionController = {
  listSets: (req, res) => {
    dataMapper.getAllSets((err, results) => {
      if (err) {
        console.error(err)
        return
      }
      res.render('sets', {
        sets: results.rows,
      })
    })
  },

  listCardByEdition: (req, res) => {
    const name = req.params.name
    console.log(name)

    dataMapper.getOneSet(name, (err, results) => {
      if (err) {
        console.error(err)
        return
      }
      res.render('set', {
        set: results.rows,
      })
    })
  },
}

module.exports = editionController
