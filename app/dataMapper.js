const database = require('./database');

const dataMapper = {

    getAllSets: function (callback) {
        console.log('on est dans le datamapper')
        const query = {
            text: `SELECT * FROM "sets"`
        };
        database.query(query, callback);
    },

    getOneSet: function (name, callback) {
        console.log(name);

        const query = {
            text:`SELECT * FROM sets JOIN cards ON sets.name=cards.set_name WHERE sets.name='${name}' ORDER BY cards.name;
            `
        };
        database.query(query,callback);
    }

}


module.exports = dataMapper;
