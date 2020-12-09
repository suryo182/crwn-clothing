import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBn5a98nVjWi7IWp3AnxQMAUPYxt0-LVOc',
  authDomain: 'crwn-db-25290.firebaseapp.com',
  projectId: 'crwn-db-25290',
  storageBucket: 'crwn-db-25290.appspot.com',
  messagingSenderId: '511891274049',
  appId: '1:511891274049:web:f84f2fd30930c92b3b09c0',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;