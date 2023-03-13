import { Button, Form, Input, message, Select } from 'antd'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BASEURL } from '../../api/config';
import { SellerForm } from '../../interfaces/seller';
import { Team } from '../../interfaces/teams';

type Props = {}

function MembersForm({ }: Props) {
    const [form] = Form.useForm();
    const [teams, setteams] = useState<Team[]>([]);


    useEffect(() => {
        const options = {
            method: 'GET',
            url: `${BASEURL}/dashboard/team`,
            // headers: {
            //     'x-token': `${query.token}`
            // },
        }
        axios.request(options).then((res) => {
            setteams(res.data);
        });

    }, [])
    const onFinish = (values: SellerForm) => {
        const options = { // Same url, different method between update and create
            method: 'POST',
            url: `${BASEURL}/dashboard/seller`,
            // headers: {
            //     'x-token': `${query.token}`
            // },
            data: values
        };
        axios.request(options).then((response) => {
            console.log(response);
            form.resetFields();
            message.success('Vendedor creado exitosamente');
            // refresh list
            //close modal

        }).catch((err) => {
            console.log(err);
            message.error('Error creando al vendedor');
        })

    }
    return (
        <Form
            form={form}
            onFinish={onFinish}
        >
            <Form.Item
                hasFeedback
                name='name'
                rules={[{ required: true, message: 'El nombre es obligatorio!' }, { min: 2, message: 'El nombre es obligatorio!' }]}
            >
                <Input placeholder='Nombre' />
            </Form.Item>
            <Form.Item
                hasFeedback
                name='lastname'
                rules={[{ required: true, message: 'El apellido es obligatorio!' }, { min: 2, message: 'El apellido es obligatorio!' }]}
            >
                <Input placeholder='Apellido' />
            </Form.Item>
            <Form.Item
                hasFeedback
                name='email'
                rules={[{ required: true, message: 'El correo es obligatorio!' }, { type: "email", message: 'El correo no es válido' }]}
            >
                <Input type='email' placeholder='Correo Electrónico' />
            </Form.Item>
            <Form.Item
                name='password'
                hasFeedback
                rules={[{ required: true, message: 'La contraseña es obligatoria!' }, { min: 5, message: 'La contraseña es muy corta!' }]}
            >
                <Input.Password placeholder='Contraseña' />
            </Form.Item>
            <Form.Item
                name="confirm"
                dependencies={['password']}
                hasFeedback
                rules={[
                    {
                        required: true,
                        message: 'Por favor confirme su contraseña!',
                    },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                            if (!value || getFieldValue('password') === value) {
                                return Promise.resolve();
                            }
                            return Promise.reject(new Error('Las dos contraseñas no coinciden'));
                        },
                    }),
                ]}
            >
                <Input.Password placeholder='Confirmar contraseña' />
            </Form.Item>
            Equipo
            <Form.Item
                name='team'
                hasFeedback
                rules={[{ required: true, message: 'Ell equipo es obligatorio' }]}
            >
                <Select
                    options={
                        teams.map((team) => {
                            return {
                                id: team._id,
                                label: team.name,
                                value: team._id,
                            }
                        })
                    }
                />
            </Form.Item>
            <Form.Item>
                <Button type='primary' htmlType='submit'>
                    Crear Vendedor
                </Button>
            </Form.Item>
        </Form>
    )
}

export default MembersForm