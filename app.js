
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000; // Nastav port, na kterém bude server poslouchat

// Pole pro ukládání uživatelů
let users = [
    { id: 1, name: 'Jan Novák' },
    { id: 2, name: 'Eva Nováková' },
    { id: 3, name: 'Petr Kříž' }
];

// Pole pro ukládání přátelství
let friendships = [
    { userId: 1, friends: [2] }, // Jan Novák má přítele Evu Novákovou
    { userId: 2, friends: [1] }  // Eva Nováková má přítele Jana Nováka
];

// ID pro přidání nového uživatele
let nextUserId = 4;

// ID pro přidání nového přátelství
let nextFriendshipId = 3;

// Middleware pro zpracování JSON těla HTTP požadavků
app.use(express.json());

// Middleware pro zpracování těla HTTP požadavků (např. formulářová data)
app.use(bodyParser.urlencoded({ extended: false }));

// Routa pro registraci nového uživatele
app.post('/register', (req, res) => {
    const { name } = req.body; // Získání jména z těla požadavku
    
    // Vytvoření nového uživatele
    const newUser = {
        id: nextUserId++,
        name: name
    };

    // Přidání nového uživatele do pole
    users.push(newUser);

    // Odpověď na požadavek
    res.json(newUser);
});

// Routa pro přidání přátelství
app.post('/add-friendship', (req, res) => {
    const { userId, friendId } = req.body; // Získání userId a friendId z těla požadavku
    
    // Kontrola, zda uživatelé existují
    const user = users.find(u => u.id === userId);
    const friend = users.find(u => u.id === friendId);

    if (!user || !friend) {
        return res.status(404).json({ error: 'Uživatel nebyl nalezen.' });
    }

    // Kontrola, zda přátelství již existuje
    const existingFriendship = friendships.find(f => f.userId === userId && f.friends.includes(friendId));
    if (existingFriendship) {
        return res.status(400).json({ error: 'Přátelství již existuje.' });
    }

    // Přidání přátelství
    friendships.push({ userId: userId, friends: [friendId] });
    friendships.push({ userId: friendId, friends: [userId] });

    // Odpověď na požadavek
    res.json({ message: 'Přátelství bylo úspěšně vytvořeno.' });
});

// Routa pro zobrazení přátel uživatele
app.get('/friends/:userId', (req, res) => {
    const userId = parseInt(req.params.userId);

    // Najít přátelství pro daného uživatele
    const friendship = friendships.find(f => f.userId === userId);

    if (!friendship) {
        return res.status(404).json({ error: 'Přátelé nebyli nalezeni.' });
    }

    // Získání informací o přátelích
    const friends = friendship.friends.map(friendId => {
        const friend = users.find(u => u.id === friendId);
        return { id: friend.id, name: friend.name };
    });

    // Odpověď na požadavek
    res.json(friends);
});

// Routování pro zpracování hledání uživatele a zobrazení výsledků
app.post('/search', (req, res) => {
    const searchQuery = req.body.searchQuery; // Získání hodnoty z formuláře

    // Filtrujeme uživatele na základě hledaného jména
    const filteredUsers = users.filter(user => user.name.includes(searchQuery));

    // Zobrazení výsledků vyhledávání (prozatím jen v konzoli)
    console.log(`Hledali jste: ${searchQuery}`);
    console.log('Výsledky:');
    console.log(filteredUsers);

    // Odeslání výsledků zpět klientovi
    res.json(filteredUsers);
});

// Spuštění serveru na definovaném portu
app.listen(port, () => {
    console.log(`Server běží na http://localhost:${port}`);
});