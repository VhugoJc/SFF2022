import React, { useState } from 'react'
import { Button, Col, Form, Image, Input, Result } from 'antd';
import axios from "axios";
import { useRouter } from 'next/router';

interface Props {
    setstaus: any
}

export const ResetPassworForm = ({ setstaus }: Props) => {
    const { query } = useRouter();
    const [response, setresponse] = useState(false);

    const onFinish = (values: any) => {
        const { password } = values;
        const hostName = location.port === ""
            ? location.protocol + "//" + location.host
            : "http://" + location.hostname + ":5000";

        const options = {
            method: 'POST',
            url: `${hostName}/api/auth/reset-password`,
            headers: {
                'x-token': `${query.token}`
            },
            data: { newPassword: password }
        };

        console.log(options);
        axios.request(options).then(function (response) {
            setresponse(true);

        }).catch(function (error) {
            setstaus('no-authorized');
            console.log(error);
        });

    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <>
            {
                response
                    ? <Result
                        status="success"
                        title="Su correo se ha cambiado exitosamente"
                        subTitle="Ya puede iniciar sesión en la aplicación con su nueva contraseña"
                    />
                    : (
                        <div className='reset-password_container'>
                            <div className='reset-password_img_container'>
                                <h1>
                                    Cambiar mi contraseña
                                </h1>
                                <Image alt='reset password' className='reset-password_img' preview={false} src='/assets/img/laptop_illustration.png' />
                            </div>
                            <Col sm={3} />
                            <Col sm={18}>
                                <Form
                                    name="basic"
                                    labelCol={{ span: 8 }}
                                    wrapperCol={{ span: 16 }}
                                    initialValues={{ remember: true }}
                                    onFinish={onFinish}
                                    onFinishFailed={onFinishFailed}
                                    autoComplete="off"
                                >
                                    <Form.Item
                                        label="Contraseña"
                                        name="password"
                                        rules={[{ required: true, message: 'Por favor ingresa tu contraseña!' }, {
                                            required: true, min: 6, message: 'La contraseña debe ser de almenos 6 caracteres'
                                        }]}
                                    >
                                        <Input.Password />
                                    </Form.Item>
                                    <Form.Item
                                        label="Repetir Contraseña"
                                        name="passwordConfirm"
                                        rules={[{ required: true, message: 'Por favor confirmaa tu contraseña' },
                                        ({ getFieldValue }) => ({
                                            validator(_, value) {
                                                if (!value || getFieldValue('password') === value) {
                                                    return Promise.resolve();
                                                }
                                                return Promise.reject(new Error('Las contraseñas no coinciden'));
                                            },
                                        })
                                        ]}
                                    >
                                        <Input.Password />
                                    </Form.Item>

                                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                                        <Button type="primary" htmlType="submit">
                                            Cambiar mi contraseña
                                        </Button>
                                    </Form.Item>
                                </Form>
                            </Col>
                            <Col sm={3} />
                        </div>
                    )
            }
        </>
    );
}