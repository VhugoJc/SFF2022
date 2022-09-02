import { Result } from 'antd';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import jwtDecode, { JwtPayload } from 'jwt-decode';
import { ResetPassworForm } from '../../../components/forms/ResetPasswordForm';
import React, { useState } from 'react';
import {LoadingPage} from '../../../components/shared/LoadingPage';

type Props = {}
type Status = 'checking' | 'authorized' | 'no-authorized';
type Token = JwtPayload
export default function ResetPassword({ }: Props) {
    const { query } = useRouter();
    const [staus, setstaus] = useState<Status>('checking');

    useEffect(() => {
        if (query) {
            try {
                console.log(query.token);
                const token = jwtDecode<JwtPayload>(`${query.token}`);
                if (token.exp) {
                    const exp = new Date(token.exp * 1000);
                    const today = new Date();
                    if (exp > today) {
                        setstaus('authorized');
                    } else {
                        setstaus('no-authorized')
                    }
                } else {
                    setstaus('no-authorized')
                }


            } catch (err) {
                setstaus('no-authorized')
            }
        }
    }, [query])
    return (
        <>
            {
                staus === 'checking'
                    ? <LoadingPage />
                    : staus === 'authorized'
                        ? <ResetPassworForm setstaus={setstaus}/>
                        : <Result
                            status="error"
                            title="Al parecer ocurrió un error"
                            subTitle="Posiblemente el periodo para realizar el cambio de contraseña ha caducado. Vuelva a repetir el proceso y de no poder acceder, contacte a un administrador"
                        />
            }
        </>
    )
}