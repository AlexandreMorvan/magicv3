const database = require('./database');

const dataMapper = {

    getAllSets: function (callback) {
        console.log('on est dans le datamapper')
        const query = {
            text: `SELECT * FROM "sets"`
        };
        database.query(query, callback);
    },

}


module.exports = dataMapper;