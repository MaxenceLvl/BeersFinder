const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();

exports.beers = functions
    .region("europe-west1")
    .https
    .onRequest((request, response) => {
        const beerId = request.query.id;
        const userId = request.query.userId;
        const body = request.body;

        const beersCollection = admin.firestore().collection("beers");
        const usersCollection = admin.firestore().collection("users");

        beersCollection
            .doc(beerId)
            .set(body, { merge: true })
            .then(() => 
                beersCollection
                    .doc(beerId)
                    .get()
                    .then((doc) => {
                        if (!doc.exists) {
                            response.status(404).send("Beer not found");
                        } else {
                            // Add doc.ref pour add une bière à un utilisateur 
                            usersCollection
                                .doc(userId)
                                .update({
                                    beers: admin.firestore.FieldValue.arrayUnion(doc.ref),
                                })
                            response.send(doc.data());
                        }
                    })
                )
                .catch((err) => {
                    functions.logger.error("/beers failed", err);
                    response.send(err.message);
                });

    });

exports.user = functions
    .region("europe-west1")
    .https.onRequest((request, response) => {
        const userId = request.query.id;
        const body = request.body;

        const usersCollection = admin.firestore().collection("users");

        usersCollection
            .doc(userId)
            .set(body, { merge: true })
            .then(() =>
                usersCollection
                    .doc(userId)
                    .get()
                    .then((doc) => {
                        if (!doc.exists) {
                            response.status(404).send("User not found");
                        } else {
                            response.send(doc.data());
                        }
                    })
            )
            .catch((err) => {
                functions.logger.error("/user failed", err);
                response.send(err.message);
            });
});