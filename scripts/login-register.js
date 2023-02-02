import Landing from "../pages/landing.js";
import { hiddeAnimation } from "../utils/loading-animation.js";
import InfoUser from "./data/user.js";
import {saveToFirebase, getFromFirebase} from "./firebase-database.js";

firebase.auth().onAuthStateChanged((user) => {
    if(user) {
        window.location.hash = '#home';
        console.log(user);
        console.log(InfoUser)
        getFromFirebase(user.uid);
        
    }else {
        console.log('belum login');
        window.location.hash = '';
    }
})

const loginFirebase = (email, pass) => {
    firebase.auth().signInWithEmailAndPassword(email, pass)
        .then((userCredential) => {
            hiddeAnimation();
        })
        .catch((error) => {
            hiddeAnimation();
            console.log(error);
            if(error.code === 'auth/user-not-found') {
                document.querySelector('.text-email-error').style.display = 'block'
            } else if (error.code === 'auth/wrong-password') {
                document.querySelector('.text-pass-error').innerText = 'Password Salah!';
                document.querySelector('.text-pass-error').style.display = 'block'
            } else if(error.code === 'auth/too-many-requests') {
                document.querySelector('.text-pass-error').innerText = 'Terlalu banyak upaya gagal, coba lagi nanti!';
                document.querySelector('.text-pass-error').style.display = 'block';
            }
        })
}

const registerFirebase = (email, pass) => {
    firebase.auth().createUserWithEmailAndPassword(email, pass)
        .then(userCredential => {
            hiddeAnimation();
            InfoUser.uid = userCredential.user.uid;
            InfoUser.email = userCredential.user.email;
            console.log(InfoUser);
            saveToFirebase(InfoUser);
        })
        .catch(error => {
            console.log(error);
        })
}

const loginGoogle = () => {
    console.log('login')
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithRedirect(provider)
        .then((result) => {
            document.querySelector('.loading-animation').style.display = 'none';
        }).catch((error) => {

        });
}

export { loginFirebase, registerFirebase, loginGoogle };