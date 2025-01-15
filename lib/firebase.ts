import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyC88OzDePEMkLrTyRHzrabpQLPMf04oNTg",
  authDomain: "chemlab-5529e.firebaseapp.com",
  projectId: "chemlab-5529e",
  storageBucket: "chemlab-5529e.firebasestorage.app",
  messagingSenderId: "249133969722",
  appId: "1:249133969722:web:8809466e9d43327538e003",
  measurementId: "G-CNCFLRKZ64"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;

export default app; 