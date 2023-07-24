const express = require('express');
const session = require('express-session');
const path = require('path');
const app = express();
const port = 3000;

app.use('/static', express.static('public'));


app.use(session({
    secret: '5D9gzF48dF<D6fE9rD4z56fg',
    resave: false,
    saveUninitialized: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const logRequest = (req, res, next) => {
    console.log(`> ${new Date().toLocaleTimeString()} - [${req.method}] ${req.originalUrl}`);

    req.user = { id: 5 };

    next();
};

app.use(logRequest);

//Résultat du Connexion de page/html
app.post('/form', (req, res) => {

    if (req.body.password == "1234") {
        res.send("Mot de passe réussi");
    } else {
        res.redirect("/fichier/html?mdpIncorrect=1");
    }

    res.send('Formulaire traité');  
})

//Racine
app.get("/", logRequest, (req, res) => {
    if (!req.session.views) {
        req.session.views = 0;
    }
    req.session.views++;
    res.send(`Hello world! Vous avez consulter cette page ${req.session.views} fois`);
});

//bonjour/prenom/nom
app.get('/bonjour/:prenom/:nom', (req, res) => {
    const text = `Bonjour ${req.params.prenom} ${req.params.nom}`;
    res.send(text);
});

// ?prenom=&nom=
app.get('/bonjour', logRequest, (req, res) => {
    const text = `Bonjour ${req.query.prenom} ${req.query.nom}`;
    console.log(req.user)
    res.send(text);
});

//articles/152
app.get('/articles/:id', (req, res) => {
    console.log(req.params);
    console.log(req.query);
    res.send(`Article #${req.params.id} du blog`);
    console.log(params.query);
})

//fichier/html qui dirige vers le page.html
app.get('/fichier/html', (req, res) => {

    console.log("__dirname", __dirname);

    res.sendFile(path.join(__dirname, "views/page.html"));
});

//Autres cas où le chemin n'existe pas
app.use((req, res) => {
    res.status(404).send("Page non trouvé")
})

app.listen(port, () => { 
    console.log(`Serveur lancé sur le port ${port}`);
    console.log(__dirname);
});
