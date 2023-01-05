import React from 'react'
import { auth } from '../../firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from "react-router-dom";

const Profile = ({ user, setUser }) => {
    const navigate = useNavigate()
    const handleSignOut = () => {
        signOut(auth).then(() => {

            setUser({})

            navigate("/")
        }).catch((error) => {
            // An error happened.
        });
    }

    return (
        <div style={{ width: "80%", margin: "auto" }}>
            <h1>this is your profile ,  {user.displayName}</h1>


            <button onClick={() => handleSignOut()}
                style={{ background: "black", color: "white", padding: ".5rem 2rem", borderRadius: ".3rem", cursor: "pointer" }}
            >Sign Out</button>

        </div>
    )
}

export default Profile