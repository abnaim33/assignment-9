import React from 'react'
import { Outlet } from 'react-router-dom'
import Login from './components/login/Login'


const useAuth = () => {
    const user = { loggedIn: false }
    return user && user.loggedIn
}

const ProtectedRoutes = ({ user }) => {

    const isAuth = useAuth();


    return (
        <>{user ? <Outlet /> : <Login />}</>
    )
}

export default ProtectedRoutes