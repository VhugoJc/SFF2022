import { Button, Result } from 'antd';
import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { BASEURL } from '../../../api/config.js';
type Props = {}

export default function ConfirmEmail({ }: Props) {
    const { query } = useRouter();
    const [status, setstatus] = useState('checking');

    useEffect(() => {
        const confirmEmail=async()=>{
            const options = {
                method: 'PUT',
                url: `${BASEURL}/auth/confirm-email`,
                data: { token:query.token }
            };
            console.log(options);
            axios.request(options).then(function (response) {
                if(response.data?.err){
                    return setstatus('fail');
                }
                return setstatus('success');
            }).catch(function (error) {
                return setstatus('fail');
            });
            
        }
        if (query) {
            if (query.token) {
                confirmEmail();
            } else {
                setstatus('fail');
            }
        } else {
            setstatus('fail');
        }

    }, [query])

    return (
        <div>
            {
                status === 'success'
                    ? (
                        <Result
                            status="success"
                            title="Su correo se ha confirmado exitosamente"
                            subTitle="Por favor rergrese a la aplicaci[on e inicie sesión"
                        />
                    )
                    : status === 'fail'
                        ? (
                            <Result
                                status="error"
                                title="Al parecer ocurrió un error"
                                subTitle="Compruebe si puede ingresar a su cuenta. De no poder ingresar por favor reportelo a un administrador"
                            />
                        )
                        : null
            }
        </div>
    )
}