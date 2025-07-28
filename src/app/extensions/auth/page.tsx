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
        const auth = getAuth();

        // このコードは拡張機能のオフスクリーンドキュメント内のiframe内で実行されます。
        // これにより親フレーム（オフスクリーンドキュメント）への参照が得られます。
        // postMessageのtargetOriginを設定するために必要です。
        const PARENT_FRAME = document.location.ancestorOrigins[0];

        // Firebase Consoleで使用したいプロバイダーを有効にしてください。
        // https://console.firebase.google.com/project/_/authentication/providers
        const PROVIDER = new GoogleAuthProvider();

        function sendResponse(result: object) {
            globalThis.parent.self.postMessage(JSON.stringify(result), PARENT_FRAME);
        }

        globalThis.addEventListener("message", function ({ data }) {
            if (data.initAuth) {
                if (data.loginHint) {
                    PROVIDER.setCustomParameters({
                        login_hint: data.loginHint,
                    });
                }

                // 拡張機能のオフスクリーンドキュメント内のiframe内で、
                // Googleサインインページをポップアップで開きます。
                // ロジックを一元化するため、すべてのレスポンスは親フレームに転送され、
                // そこから拡張機能のサービスワーカーに転送されます。
                signInWithPopup(auth, PROVIDER).then(sendResponse).catch(sendResponse);
            }
        });
    }, []);

    return (
        <>
            <h1>signInWithPopup</h1>
        </>
    );
}
