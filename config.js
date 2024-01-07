import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyCVx5c54vBjTPTMLanZEm4h_REC5swBr14",
  authDomain: "proyecto78-b1498.firebaseapp.com",
  projectId: "proyecto78-b1498",
  storageBucket: "proyecto78-b1498.appspot.com",
  messagingSenderId: "178645108169",
  appId: "1:178645108169:web:bfc21c3bc74fff28c21418"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
