import InfoUser from "./data/user.js";

function saveToFirebase(user) {
    console.log(user);
    firebase.database().ref('users').child(user.uid).set(user);
}

async function getFromFirebase(uid) {
    await firebase.database().ref('users').child(uid).once('value', (snap) => {
        InfoUser.uid = snap.val().uid;
        InfoUser.name = snap.val().name;
        InfoUser.noHP = snap.val().noHP;
        InfoUser.address = snap.val().address;
        InfoUser.nameReceive = snap.val().nameReceive;
        InfoUser.noHPReceive = snap.val().noHPReceive;
        InfoUser.chart = snap.val().chart;
    })
}

export {saveToFirebase, getFromFirebase};