import { initializeApp } from '@firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyAd10XrNWJWerI8aQri7cvaYKZ1L-3YSUc",
  authDomain: "formaapp-556b1.firebaseapp.com",
  projectId: "formaapp-556b1",
  storageBucket: "formaapp-556b1.appspot.com",
  messagingSenderId: "389901551426",
  appId: "1:389901551426:web:17ee265f61e196c690aadb"
};

export const firebaseApp = initializeApp(firebaseConfig);

export default firebaseConfig;
