import firebase_app from "../config";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, GoogleAuthProvider,signInWithPopup, signOut } from "firebase/auth";

const auth = getAuth(firebase_app);
export const googleProvider = new GoogleAuthProvider();


export async function signUp(email: string, password: string) {
    let result = null,
        error = null;
    try {
        result = await createUserWithEmailAndPassword(auth, email, password);
    } catch (e) {
        error = e;
    }

    return { result, error };
};


export async function signIn(email: string, password: string) {
    let result = null,
        error = null;
    try {
        result = await signInWithEmailAndPassword(auth, email, password);
    } catch (e) {
        error = e;
    }

    return { result, error };
};


export const signInWithGoogle = async () => {
    try {
    await signInWithPopup(auth,googleProvider);
    } catch (err){
      console.error(err);
    }
};


export const logOut = async () => {
    try {
    await signOut(auth);
    } catch (err){
      console.error(err);
    }
  };