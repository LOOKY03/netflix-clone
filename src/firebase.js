import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBTG9NIIFzRPgMkPe2i59zpSI3v2q3WH_0",
  authDomain: "netflix-clone-build-98a86.firebaseapp.com",
  projectId: "netflix-clone-build-98a86",
  storageBucket: "netflix-clone-build-98a86.appspot.com",
  messagingSenderId: "456926647221",
  appId: "1:456926647221:web:efb0254b9c4fa5cc743ffc",
  measurementId: "G-NE8YC1PD8S",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };

export default db;
