import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD-2ij6Xvj1gbNMDEzoat8kgoa-cTIYhS0",
  authDomain: "clone-17647.firebaseapp.com",
  projectId: "clone-17647",
  storageBucket: "clone-17647.appspot.com",
  messagingSenderId: "654001867947",
  appId: "1:654001867947:web:91727375dea8144c2dbbee",
};

// Initialize Firebase
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
