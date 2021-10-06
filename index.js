const dotenv = require('dotenv');
const express = require('express');
const router = require('./app/router');
const PORT = 3000;
dotenv.config();

const app = express();
app.set('view engine', 'ejs');
app.set('views', 'app/views');
app.use(express.static('./public'));

// On ajoute notre middleware qui intercept les données envoyer sous format urlencoded et les mets dans le body
app.use(express.urlencoded({
    extended: true
}));


// On dis à notre application express d'utiliser le router que l'on a récupérer de notre fichier router.js
app.use(router);

app.listen(PORT, () => {
    console.log(`app started on http://localhost:${PORT}`);
})