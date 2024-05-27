import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDZUklfpyVbhgZGBCe4JbSzkLK2pl2Hz_U",
  authDomain: "chat-app-42bbc.firebaseapp.com",
  projectId: "chat-app-42bbc",
  storageBucket: "chat-app-42bbc.appspot.com",
  messagingSenderId: "968051788090",
  appId: "1:968051788090:web:02bd319328a14ba0d72803",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
