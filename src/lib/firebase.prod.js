import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from '../seed';

const config = {
  apiKey: "AIzaSyDbm4UoK38lKsUzj1zyDFlwwH6m1c9FnP4",
  authDomain: "netflix-c174d.firebaseapp.com",
  projectId: "netflix-c174d",
  storageBucket: "netflix-c174d.appspot.com",
  messagingSenderId: "825069601295",
  appId: "1:825069601295:web:6975fb24501f476e58597a"
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };
