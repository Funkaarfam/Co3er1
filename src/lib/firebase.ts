// src/lib/firebase.ts
// ─────────────────────────────────────────────────────────────
//  Real API keys are stored in .env.local (gitignored).
//  This file only reads from Vite's import.meta.env — no secrets here.
// ─────────────────────────────────────────────────────────────

import { initializeApp, getApps } from "firebase/app";
import { getFirestore }           from "firebase/firestore";

const firebaseConfig = {
  apiKey:            import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain:        import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId:         import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket:     import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId:             import.meta.env.VITE_FIREBASE_APP_ID,
};

// Prevent duplicate app init during hot reload
const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
export const db = getFirestore(app);
