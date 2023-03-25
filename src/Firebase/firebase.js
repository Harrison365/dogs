import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBCPZBUYimaDk49FDhVqaFvtKSdp6t5trc",
  authDomain: "dog-app-e4e7c.firebaseapp.com",
  projectId: "dog-app-e4e7c",
  storageBucket: "dog-app-e4e7c.appspot.com",
  messagingSenderId: "1011571825777",
  appId: "1:1011571825777:web:800ddec27be0a9020b0fd0",
  measurementId: "G-0WCFT7VFF3",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
