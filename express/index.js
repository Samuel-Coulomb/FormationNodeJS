const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use('/static', express.static('public'));

app.get("/", (req, res) => {
    res.send('Hello world!');
});

app.get('/bonjour/:prenom/:nom', (req, res) => {
    const text = `Bonjour ${req.params.prenom} ${req.params.nom}`
    res.send(text)
});

app.get('/articles/:id', (req, res) => {
    console.log(req.params)
    console.log(req.query)
    res.send(`Article #${req.params.id} du blog`)
})

app.get('/fichier/html', (req, res) => {

    console.log("__dirname", __dirname)

    res.sendFile(path.join(__dirname, "views/page.html"));
});

app.listen(port, () => { 
    console.log(`Serveur lancé sur le port ${port}`);
    console.log(__dirname);
});
