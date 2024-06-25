const express = require('express');
const bodyParser = require('body-parser');
const { initializeApp } = require('firebase/app');
const { getDatabase, ref, query, orderByChild, startAt, endAt, get } = require('firebase/database');

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
const firebaseApp = initializeApp(firebaseConfig);
const db = getDatabase(firebaseApp);

// Middleware pro zpracování JSON těla požadavků
app.use(bodyParser.json());

// Endpoint pro vyhledávání uživatelů
app.get('/search', async (req, res) => {
    const queryParam = req.query.q.toLowerCase();

    try {
        const snapshot = await get(query(ref(db, 'users'), orderByChild('name_lowercase'), startAt(queryParam), endAt(queryParam + '\uf8ff')));

        if (snapshot.exists()) {
            const results = [];
            snapshot.forEach((childSnapshot) => {
                results.push({ id: childSnapshot.key, name: childSnapshot.val().name });
            });
            res.json(results);
        } else {
            res.json([]);
        }
    } catch (error) {
        console.error('Error searching users:', error);
        res.status(500).json({ error: 'Failed to search users' });
    }
});

// Spuštění serveru
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});