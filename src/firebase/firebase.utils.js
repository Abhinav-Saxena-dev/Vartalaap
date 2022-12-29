import firebase from 'firebase/compat/app';
import {getFirestore} from 'firebase/firestore';

import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config =  {
    apiKey: "AIzaSyBwh9twJalsyRqJse31aGAA0zSQTvBk1eI",
    authDomain: "vartalaap-c054c.firebaseapp.com",
    projectId: "vartalaap-c054c",
    storageBucket: "vartalaap-c054c.appspot.com",
    messagingSenderId: "19003932103",
    appId: "1:19003932103:web:4c16f14898016771b6ede2"
  };

const app = firebase.initializeApp(config)

export const db = getFirestore(app)

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({promt : 'select_account'})

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;