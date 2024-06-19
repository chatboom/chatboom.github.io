const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');

const app = express();
const port = 3000;

// Povolení CORS pro všechny zdroje na adrese http://localhost:8000
app.use(cors({
    origin: 'http://localhost:8000', // Povolit přístup pouze z tohoto URL
    methods: ['GET', 'POST'], // Povolit pouze metody GET a POST
    credentials: true // Povolit použití cookies
}));

// Middleware pro zpracování JSON a url-encoded dat
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Nastavení úložiště pro multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/uploads');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

// Statické soubory ve veřejném adresáři
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint pro příjem uploadu souborů
app.post('/upload', upload.single('media'), (req, res) => {
    // Zde můžete zpracovat příchozí data (např. textový popisek a soubor média)
    console.log('Přijatý požadavek na upload:', req.body, req.file);

    // Odpověď na požadavek
    res.status(200).json({ 
        message: 'Data byla úspěšně přijata.',
        filePath: `/uploads/${req.file.filename}`
    });
});

// Spuštění serveru
app.listen(port, () => {
    console.log(`Server běží na adrese http://localhost:${port}`);
});