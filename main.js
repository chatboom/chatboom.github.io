// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, push, set, serverTimestamp, goOffline } from "firebase/database"; // Přidání importů pro Realtime Database

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAu1PLSU2rnSLNdfQcshBSNESqM7svzyRQ",
  authDomain: "chatboom-95647.firebaseapp.com",
  projectId: "chatboom-95647",
  storageBucket: "chatboom-95647.appspot.com",
  messagingSenderId: "458271134858",
  appId: "1:458271134858:web:5e09d3329ba81626830973",
  measurementId: "G-KS97KKQ3EH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app); // Inicializace Realtime Database

// Funkce pro odeslání zprávy
function sendChatMessage(message) {
  // Vygenerujte jedinečný identifikátor pro zprávu
  const messagesRef = ref(database, 'messages');
  const newMessageRef = push(messagesRef);
  
  // Data zprávy
  const messageData = {
    content: message,
    timestamp: serverTimestamp()
  };
  
  // Uložení zprávy do databáze
  set(newMessageRef, messageData)
    .then(() => {
      console.log('Zpráva byla úspěšně odeslána.');
    })
    .catch((error) => {
      console.error('Chyba při odesílání zprávy:', error);
    });
}

// Přidání event listeneru na tlačítko pro odesílání zpráv
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');

sendButton.addEventListener('click', () => {
  const message = messageInput.value.trim();
  if (message !== '') {
    sendChatMessage(message);
    messageInput.value = ''; // Vyprázdnění pole pro zprávy po odeslání
  }
});

// Funkce pro ukončení připojení k Realtime Database
function disconnectDatabase() {
  goOffline(database);
  console.log('Připojení k databázi bylo ukončeno.');
}

// Příklad použití funkce pro ukončení připojení
window.addEventListener('beforeunload', () => {
  disconnectDatabase();
});