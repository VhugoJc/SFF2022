import React from 'react'
import { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../context/authContext/AuthContext';
import AdminNavigation from './admin/AdminNavigation';
import AppNavigation from './User/AppNavigation';
import LoginNavigation from './shared/LoginNavigation';


export default function Navigation() {
    const { authState } = useContext(AuthContext);

    return (
        <>
            {
                authState.isLoggedIn //if the user is Logged
                    ? authState.role === "admin" //if the user role is admin
                        ? <AdminNavigation />
                        : authState.role === "user" //if the user role is user
                            ? <AppNavigation />
                            : <LoginNavigation /> 
                    : <LoginNavigation />
            }
        </>
    )
}