import Firebase from 'firebase';

var firebaseConfig = {
  apiKey: 'AIzaSyAro_UR1mRphbl4Cc-c8netApeiqyIsIV8',
  authDomain: 'subletapp-edd53.firebaseapp.com',
  databaseURL: 'https://subletapp-edd53.firebaseio.com',
  projectId: 'subletapp-edd53',
  storageBucket: 'subletapp-edd53.appspot.com',
  messagingSenderId: '728295010566',
  appId: '1:728295010566:web:5eb0a331962a3e2930ae87',
  measurementId: 'G-BXPC3BY6D7',
};

let app = Firebase.initializeApp(firebaseConfig);
export const db = app.database();
