export const responseErrorCode = errorCode => {
  switch (errorCode) {
    case 'auth/invalid-email':
      return 'Invalid Email';
    case 'auth/wrong-password':
      return 'Wrong Password';
    case 'auth/user-not-found':
      return 'Email not found';
    case 'auth/account-exists-with-different-credential':
      return `User's email already exists`;
    default:
      return errorCode;
  }
};

export const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};
