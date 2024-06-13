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

exports.deleteOldMessages = functions.pubsub.schedule('every 2 minutes').onRun(async (context) => {
    const messagesRef = admin.database().ref('messages');
    const currentTime = Date.now();
    const twoMinutesAgo = currentTime - (2 * 60 * 1000); // 2 minuty v milisekundách

    try {
        // Získání zpráv starších než 2 minuty
        const snapshot = await messagesRef.orderByChild('timestamp').endAt(twoMinutesAgo).once('value');
        
        // Příprava na Batch mazání
        const batch = admin.database().batch();

        // Přidání operací mazání do batche
        snapshot.forEach((childSnapshot) => {
            const messageId = childSnapshot.key;
            batch.delete(messagesRef.child(messageId));
        });

        // Provedení batch operace
        await batch.commit();

        return null;
    } catch (error) {
        console.error('Error deleting old messages:', error);
        return null;
    }
});