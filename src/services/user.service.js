import {db} from '../firebase/firebase.utils';

import {collection, getDocs, getDoc, setDoc, updateDoc, deleteDoc, doc} from 'firebase/firestore';

const usersCollectionRef = collection(db, 'users');

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userDocRef = doc(usersCollectionRef, userAuth._delegate.uid);
    const userDocSnap = await getDoc(userDocRef);

    if(!userDocSnap.exists()){
      const { displayName, email } = userAuth._delegate;
      const date = new Date();
      const follwers = [];
      const following = [];
      try{
        await setDoc(userDocRef, {
            displayName,
            email,
            date,
            following,
            follwers,
            ...additionalData,
        })

        console.log('success');
      }catch(err){
        console.log(err);
      }
    }
    return userDocRef;
}

export const getAllUser = () => {
  
}