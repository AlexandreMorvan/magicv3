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
    const name = req.params.name;
    console.log(name)
    const name_set = name.toLowerCase();
    dataMapper.getOneSet(name_set, (err, results) => {
      if (err) {
        console.error(err)
        console.log('on est dans le error du edition controller')
        return
      }
      console.log('on est dans le render')
      res.render('set', {
        set: results.rows,
      })
    })
  },
}

module.exports = editionController
