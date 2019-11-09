import Firebase from 'firebase';

let config = {
  apiKey: 'AIzaSyCVL6ol6r2nx0bdC7CXk5EE74cyyl5a6ag',
  authDomain: 'cs262j-trial.firebaseapp.com',
  databaseURL: 'https://cs262j-trial.firebaseio.com',
  projectId: 'cs262j-trial',
  storageBucket: 'cs262j-trial.appspot.com',
  messagingSenderId: '232929303884',
  appId: '1:232929303884:web:7a07773eae8772c29c03e9',
  measurementId: 'G-311QQ9Y5ZN',
};

let app = Firebase.initializeApp(config);
export const db = app.database();