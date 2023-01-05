import React, { useState } from 'react'
import SignInForm from '../signIn/SignInForm'
import LoginForm from './LoginForm'
import styles from "./Login.module.css";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from '../../firebase';


const provider = new GoogleAuthProvider();

const Login = () => {

    const [userLogin, setUserLogin] = useState(true)

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                console.log(user, 'from google signin')
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    }

    return (
        <div className={styles.container}>
            {userLogin ? <LoginForm userLogin={userLogin} setUserLogin={setUserLogin} />
                :
                <SignInForm userLogin={userLogin} setUserLogin={setUserLogin} />}


            <div>

                <button onClick={() => handleGoogleSignIn()}>Signin with Google</button>


            </div>

        </div>
    )
}

export default Login