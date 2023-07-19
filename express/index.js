const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send('Hello world!');
});

app.get('/bonjour', (req, res) => {
    res.send("Bonjour tous le monde")
});

app.get('/fichier/html', (req, res) => {

    console.log("__dirname", __dirname)

    res.sendFile(path.join(__dirname, "views/page.html"));
});

app.listen(port, () => {
    console.log(`Serveur lancé sur le port ${port}`)
});
