/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

exports.deleteOldMessages = functions.pubsub.schedule('every 24 hours').onRun(async (context) => {
    const messagesRef = admin.database().ref('messages');
    const currentTime = Date.now();
    const twentyFourHoursAgo = currentTime - (24 * 60 * 60 * 1000); // 24 hodin v milisekundách

    try {
        // Získání zpráv starších než 24 hodin
        const snapshot = await messagesRef.orderByChild('timestamp').endAt(twentyFourHoursAgo).once('value');
        
        // Smazání starých zpráv
        snapshot.forEach((childSnapshot) => {
            const messageId = childSnapshot.key;
            admin.database().ref(`messages/${messageId}`).remove();
        });

        return null;
    } catch (error) {
        console.error('Error deleting old messages:', error);
        return null;
    }
});