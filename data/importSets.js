require("dotenv").config();

// Je me connecte à ma BDD
const { Client } = require('pg');
const client = new Client("postgresql://postgres:js4life@localhost/magic");


const importFunction = async () => {
    await client.connect();

    const setsBDD = [];

    // Je récupère les cartes
    const sets = require("./sets.json");
    // Je les injecte en base de données
    /// Je parcours les cartes
    for (const set of sets) {
        
        const text = 'INSERT INTO sets(object, id, code, tcgplayer_id, name, uri, scryfall_uri, search_uri, released_at, set_type, card_count, digital, nonfoil_only, foil_only, icon_svg_uri) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15) RETURNING name';
        const values = [set.object, set.id, set.code, set.tcgplayer_id, set.name, set.uri, set.scryfall_uri, set.search_uri, set.released_at, set.set_type, set.card_count, set.digital, set.nonfoil_only, set.foil_only, set.icon_svg_uri];

        try {
            const res = await client.query(text, values);
            console.log(res.rows[0]);
            
            // le res.rows[0] correspond à un objet { id: 16, label: 'Accueil' } 
            // la forme de cette objet est définie dans le RETURNING de l'INSERT
            setsBDD.push(res.rows[0]);
        } catch (err) {
            console.log(err.stack);
        }
    }


    // Je ferme ma connection
    await client.end();


    console.log("import terminé");
}

console.log("Lancement de l'import");
importFunction();