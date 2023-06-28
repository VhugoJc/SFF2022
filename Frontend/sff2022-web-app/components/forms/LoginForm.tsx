import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Checkbox, Form, Input, message } from 'antd'
import axios from 'axios';
import React from 'react'
import { BASEURL } from '../../api/config';
import useAuth from "../../Hooks/useAuth";
import { useRouter } from 'next/router';
type Props = {}

function LoginForm({ }: Props) {
    const {login} = useAuth();
    const { push} = useRouter();

    const onFinish = async (values: any) => {
        const options = {
            method: 'POST',
            url: `${BASEURL}/dashboard/login`,
            data: values
        };
        axios.request(options).then((response) => {
            login(response.data.token);
            push("/admin");
        }).catch((err) => {
            if(err.response.data?.msg){
                message.error(err.response.data.msg);
                return;
            }
            console.log(err);
            
            message.error('Error al iniciar sesión');
        })

    };
    
    return (
        <Form
            style={{width:'100%'}}
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
        >
            <Form.Item
                name="email"
                rules={[{ required: true, message: 'Please input your Username!' }]}
            >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="correo electrónico" />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[{ required: true, message: 'Tu contraseña!' }]}
            >
                <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                    Log in
                </Button>
            </Form.Item>
        </Form>
    )
}

export default LoginForm