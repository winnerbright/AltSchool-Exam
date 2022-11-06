import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAFVsCPZNT2oWQ0JyRhQNWrk0S6liIaAMA",
  authDomain: "authentication-app-c1bb1.firebaseapp.com",
  projectId: "authentication-app-c1bb1",
  storageBucket: "authentication-app-c1bb1.appspot.com",
  messagingSenderId: "307975093842",
  appId: "1:307975093842:web:b94d3910d5db5762a7a98b"
};

const app = initializeApp(firebaseConfig);
 export const auth =getAuth(app);

 const provider = new GoogleAuthProvider()

export const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const name = result.user.displayName
        const email = result.user.email
        const profilePic = result.user.photoURL

        localStorage.setItem("name", name)
        localStorage.setItem("email", email)
        localStorage.setItem("profilePic", profilePic)
      })

      .catch((error) => {
        console.log(error);
    });
};