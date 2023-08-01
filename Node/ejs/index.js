const express = require('express');
const app = express();
const port = 3000;

const articles = [
    {
        title: "Salut",
        category:"C'est le salut",
    },
    {
        title: "Salut 2",
    },
    {
        title: "Salut 3",
        category:"C'est le salut 3",
    },
    {
        title: "Salut 4",
        category:"C'est le salut 4",
    },
];

app.set('view engine', 'ejs');

app.use('/static', express.static('public'));

app.get('/', (req, res) => {
    res.render('pages/home');
});

app.get('/hello/:name', (req, res) => {
    const data = {
        name: req.params.name,
    };
    res.render('pages/hello', data);
});

app.get('/posts', (req, res) => {
    res.render('pages/posts-list', { posts: articles });
});

app.listen(port, () => {
    console.log(`Serveur lancé sur le port ${port}`);
});