import 'firebase/compat/firestore';
import app from 'firebase/compat/app';
import firebaseConfig from "./FirebaseConfig";
import { getFirestore } from '@firebase/firestore';

const firebaseApp = app.initializeApp(firebaseConfig);

export const firestoreDb = getFirestore(firebaseApp)