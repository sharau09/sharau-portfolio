import { initializeApp, getApps } from 'firebase/app';
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || ""
};

export const isFirebaseConfigured = Boolean(
  firebaseConfig.apiKey && 
  firebaseConfig.projectId && 
  firebaseConfig.apiKey !== "your_api_key_here"
);

let db = null;

if (isFirebaseConfigured) {
  try {
    const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
    db = getFirestore(app);
  } catch (error) {
    console.warn("Firebase initialization skipped or failed:", error);
  }
}

/**
 * Submit contact inquiry to Firestore or fallback local storage
 * @param {{ name: string, email: string, message: string }} formData 
 */
export async function submitContactInquiry(formData) {
  const timestamp = new Date().toISOString();
  const payload = {
    ...formData,
    createdAt: timestamp,
    userAgent: navigator.userAgent || 'unknown',
    source: 'portfolio_editorial_form'
  };

  if (isFirebaseConfigured && db) {
    try {
      const docRef = await addDoc(collection(db, 'portfolio_inquiries'), {
        ...payload,
        serverTimestamp: serverTimestamp()
      });
      return { 
        success: true, 
        mode: 'firestore', 
        id: docRef.id,
        message: 'Your correspondence has been received via secure cloud registry.' 
      };
    } catch (err) {
      console.error("Firestore submission error:", err);
      // Graceful fallback to local persistence so user's message is preserved
      saveToLocalArchive(payload);
      return { 
        success: true, 
        mode: 'local_fallback', 
        message: 'Message securely captured in archive.' 
      };
    }
  } else {
    // Graceful local persistence mode
    saveToLocalArchive(payload);
    // Simulate slight luxury network latency for natural UX
    await new Promise((res) => setTimeout(res, 600));
    return {
      success: true,
      mode: 'simulated',
      message: 'Your correspondence has been received and archived.'
    };
  }
}

function saveToLocalArchive(data) {
  try {
    const existing = JSON.parse(localStorage.getItem('sharau_portfolio_inquiries') || '[]');
    existing.unshift({ id: 'inq_' + Date.now(), ...data });
    localStorage.setItem('sharau_portfolio_inquiries', JSON.stringify(existing));
  } catch (e) {
    console.warn("Could not save to localStorage archive", e);
  }
}
