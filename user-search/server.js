const express = require('express');
const bodyParser = require('body-parser');
const firebase = require('firebase/app');
require('firebase/firestore');

const app = express();
const port = 3000;

// Konfigurace Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAu1PLSU2rnSLNdfQcshBSNESqM7svzyRQ",
    authDomain: "chatboom-95647.firebaseapp.com",
    databaseURL: "https://chatboom-95647-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "chatboom-95647",
    storageBucket: "chatboom-95647.appspot.com",
    messagingSenderId: "458271134858",
    appId: "1:458271134858:web:5e09d3329ba81626830973",
    measurementId: "G-KS97KKQ3EH"
};

// Inicializace aplikace Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Middleware pro zpracování JSON těla požadavků
app.use(bodyParser.json());

// Middleware pro CORS
const cors = require('cors');
app.use(cors());

// Endpoint pro vyhledávání uživatelů
app.get('/search', async (req, res) => {
    const query = req.query.q.toLowerCase();
  
    try {
        // Vyhledávání uživatelů ve Firestore
        const snapshot = await db.collection('users')
            .where('name_lowercase', '>=', query)
            .where('name_lowercase', '<=', query + '\uf8ff')
            .get();

        const results = [];
        snapshot.forEach(doc => {
            results.push({ id: doc.id, name: doc.data().name });
        });
        res.json(results);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to search users' });
    }
});

// Spuštění serveru
app.listen(port, () => {
    console.log(`Server běží na http://localhost:${port}`);
});
