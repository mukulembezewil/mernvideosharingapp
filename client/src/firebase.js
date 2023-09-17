import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyAD7LPx3auViZRdziGb-fxiFOUm1FO77Uo',
	authDomain: 'video-8a125.firebaseapp.com',
	projectId: 'video-8a125',
	storageBucket: 'video-8a125.appspot.com',
	messagingSenderId: '247514458067',
	appId: '1:247514458067:web:a9a1fa1f6f9b367e007126',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;
