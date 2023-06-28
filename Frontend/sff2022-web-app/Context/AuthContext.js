import axios from 'axios';
import React, { createContext, useState } from 'react';
import { BASEURL } from '../api/config';
import { useRouter } from 'next/router';

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const {push} = useRouter();


    const [user, setUser] = useState(null);


    const login = (token) => {
        localStorage.setItem("x-token",token);
        push("/admin")
    }
    const logOut = () => {
        setUser(null);
        localStorage.removeItem("x-token");
        push("/account/auth/login")
    }

    const getToken = () => {
        return localStorage.getItem("x-token");
    }

    const isAuth = () => {
        const token = localStorage.getItem("x-token");
        if(token===null){
            return false;
        }
        const options = {
            method: 'GET',
            url: `${BASEURL}/dashboard/admin/me`,
            headers: {
                'x-token': `${token}`
            },
        };
        axios.request(options).then((response) => {
            setUser({
                name: response.data.name,
                lastname: response.data.lastname,
                email: response.data.email,
            })
        }).catch((err) => {
            console.log(err);
            logOut();
        });
        return true;
    }

    return (
        <AuthContext.Provider
            value={{
                login,
                logOut,
                isAuth,
                getToken
            }}
        >
            {children}
        </AuthContext.Provider>)
}

export default AuthContext;