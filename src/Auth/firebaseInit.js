import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCtkuoi5UgbXhnjiRqNlWCqaWhOGH87b0Q",
  authDomain: "clone-95989.firebaseapp.com",
  projectId: "clone-95989",
  storageBucket: "clone-95989.appspot.com",
  messagingSenderId: "828774000083",
  appId: "1:828774000083:web:ce90bebd8d95569e327b26",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
