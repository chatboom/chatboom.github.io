// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

// Reference na Realtime Database
const database = firebase.database();

// Funkce pro odeslání zprávy
function sendChatMessage(message) {
  // Vygenerujte jedinečný identifikátor pro zprávu
  const messageId = database.ref().child('messages').push().key;
  
  // Data zprávy
  const messageData = {
    content: message,
    timestamp: firebase.database.ServerValue.TIMESTAMP
  };
  
  // Uložení zprávy do databáze
  database.ref('messages/' + messageId).set(messageData)
    .then(() => {
      console.log('Zpráva byla úspěšně odeslána.');
    })
    .catch((error) => {
      console.error('Chyba při odesílání zprávy:', error);
    });
}

const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');

sendButton.addEventListener('click', () => {
  const message = messageInput.value.trim();
  if (message !== '') {
    sendChatMessage(message);
    messageInput.value = ''; // Vyprázdnění pole pro zprávy po odeslání
  }
});