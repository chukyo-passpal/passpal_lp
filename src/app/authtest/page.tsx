"use client";
import { signInWithPopup, GoogleAuthProvider, getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { useEffect } from "react";

const firebaseConfig = {
    apiKey: "AIzaSyDEIMvdEP3dVb6ePmE4XZODAPnjcrwydeg",
    authDomain: "chukyo-passpal.firebaseapp.com",
    projectId: "chukyo-passpal",
    storageBucket: "chukyo-passpal.firebasestorage.app",
    messagingSenderId: "707651746611",
    appId: "1:707651746611:web:3978e68bf6ffce20055c46",
    measurementId: "G-08GCHLYMXG",
};

export default function AuthPage() {
    useEffect(() => {
        initializeApp(firebaseConfig);
    }, []);

    return (
        <>
            <h1>signInWithPopup</h1>
            <button
                onClick={() => {
                    const auth = getAuth();
                    const PROVIDER = new GoogleAuthProvider();
                    signInWithPopup(auth, PROVIDER)
                        .then((result) => {
                            console.log("Sign-in successful:", result);
                        })
                        .catch((error) => {
                            console.error("Sign-in failed:", error);
                        });
                }}
            >
                Sign In With Google
            </button>
        </>
    );
}
