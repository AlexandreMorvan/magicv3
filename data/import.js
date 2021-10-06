require("dotenv").config();

// Je me connecte à ma BDD
const { Client } = require('pg');
const client = new Client("postgresql://postgres:js4life@localhost/magic");


const importFunction = async () => {
    await client.connect();

    const cardsBDD = [];

    // Je récupère les cartes
    const cards = require("./cards.json");
    // Je les injecte en base de données
    /// Je parcours les cartes
    for (const card of cards) {
        console.log(card.name)
        
        if(card.image_uris != undefined){
            var cardImage = card.image_uris.small;
        } else {
            for(const elm of card.card_faces){
               var cardImage = elm.image_uris.small;
            }
        }
        
        
        console.log(card.mana_cost)
        /// Je les enregistre une à une
        const text = 'INSERT INTO cards(name, released_at, image, manacost, cmc, type_line, oracle_text, colors, set_id, set, set_name, rarity, flavor_text) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13) RETURNING image, name';
        const values = [card.name, card.released_at, cardImage, card.mana_cost, card.cmc, card.type_line, card.oracle_text, card.colors, card.set_id, card.set, card.set_name, card.rarity, card.flavor_text];

        try {
            
            const res = await client.query(text, values);
            console.log(res.rows[0]);
            
            // le res.rows[0] correspond à un objet { id: 16, label: 'Accueil' } 
            // la forme de cette objet est définie dans le RETURNING de l'INSERT
            cardsBDD.push(res.rows[0]);
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