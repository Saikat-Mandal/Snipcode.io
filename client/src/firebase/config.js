import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyDW8GBvTA_2gxtZA1E6vev1keZGc8BgZbo",
  authDomain: "dropbox-2.firebaseapp.com",
  projectId: "dropbox-2",
  storageBucket: "dropbox-2.appspot.com",
  messagingSenderId: "757788896067",
  appId: "1:757788896067:web:39627bda1a05ccef9cddf6",
  measurementId: "G-383V0WL2KQ"
};

export const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
