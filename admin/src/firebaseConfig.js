import { initializeApp } from 'firebase/app';
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "netflix-clone-86646.firebaseapp.com",
  projectId: "netflix-clone-86646",
  storageBucket: "netflix-clone-86646.appspot.com",
  messagingSenderId: "625793051537",
  appId: "1:625793051537:web:7a18d7e5d134180ad38830",
  measurementId: "G-N2KJTQZ7ZR"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export default storage;