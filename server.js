const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');
const port = 3000;

// Povolení CORS pro všechny zdroje na adrese http://localhost:3000
app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
    credentials: true
}));

// Middleware pro zpracování JSON a url-encoded dat
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Statické soubory ve veřejném adresáři
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint pro příjem uploadu souborů
app.post('/upload', (req, res) => {
    // Zde můžete zpracovat příchozí data (např. textový popisek a soubor média)
    console.log('Přijatý požadavek na upload:', req.body);

    // Odpověď na požadavek
    res.status(200).json({ message: 'Data byla úspěšně přijata.' });
});

// Spuštění serveru
app.listen(port, () => {
    console.log(`Server běží na adrese http://localhost:${port}`);
});