import { Button, Result } from 'antd';
import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
type Props = {}

export default function ConfirmEmail({ }: Props) {
    const { query } = useRouter();
    const [status, setstatus] = useState('checking');

    useEffect(() => {
        const hostName=location.port === ""
        ? location.protocol + "//" + location.host
        : "http://" + location.hostname + ":5000";
        
        const confirmEmail=async()=>{
            const options = {
                method: 'PUT',
                url: `${hostName}/api/auth/confirm-email`,
                data: { token:query.token }
            };
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