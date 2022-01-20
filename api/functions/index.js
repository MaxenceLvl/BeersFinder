const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();

exports.beers = functions
  .region("europe-west1")
  .https.onRequest((request, response) => {
    const beerId = request.query.id;

    admin
      .firestore()
      .collection("beers")
      .get()
      .then((snapshot) => {
        const result = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          result.push(data);
        });
        response.send(result);
      });
  });

exports.beer = functions
  .region("europe-west1")
  .https.onRequest((request, response) => {
    const beersCollection = admin.firestore().collection("beers");
    const usersCollection = admin.firestore().collection("users");
    const body = request.body;

    const beerId = request.query.id;
    const userId = request.query.userId;

    switch (request.method) {
      case "POST":
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
                  usersCollection.doc(userId).update({
                    beers: admin.firestore.FieldValue.arrayUnion(doc.ref),
                  });
                  response.send(doc.data());
                }
              })
          )
          .catch((err) => {
            functions.logger.error("/beers failed", err);
            response.send(err.message);
          });

        break;
      case "PATCH":
        console.log(`/beers/${beerId}`);
        beersCollection
          .doc(beerId)
          .get()
          .then((doc) => {
            console.log(doc.data());
            usersCollection
              .doc(userId)
              .update({
                beers: admin.firestore.FieldValue.arrayRemove(doc.ref),
              })
              .then(() =>
                usersCollection
                  .doc(userId)
                  .get()
                  .then((doc) => {
                    if (!doc.exists) {
                      response.status(404).send("Beer not found");
                    } else {
                      response.send(doc.data());
                    }
                  })
                  .catch((err) => console.log(err))
              )
              .catch((err) => console.log(err));
          })
          .catch((err) => console.log(err));
        break;
      default:
        break;
    }
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
