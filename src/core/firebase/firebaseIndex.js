// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import {
  getAuth,
  signOut,
  GoogleAuthProvider,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import { firebaseConfig } from './config';

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  display: 'popup',
});
export const auth = getAuth();
export const logOut = signOut(auth);
export const sighupUser = createUserWithEmailAndPassword;
export const signIn = signInWithEmailAndPassword;
export const sendEmailVerificationLink = sendEmailVerification;
export const forgotPasswordReset = sendPasswordResetEmail;
