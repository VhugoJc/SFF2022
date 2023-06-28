import { Button, Form, Input, message, Select } from 'antd'
import axios from 'axios';
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { BASEURL } from '../../api/config';
import { SellerForm } from '../../interfaces/Users';
import { Team } from '../../interfaces/teams';
import useAuth from '../../Hooks/useAuth';

type Props = {
    setrefresh: Dispatch<SetStateAction<boolean>>,
    setIsModalOpen: Dispatch<SetStateAction<boolean>>,
    sellerDataForm: SellerForm | null,
    isUpdate: boolean
}

function MembersForm({ setrefresh, setIsModalOpen, sellerDataForm, isUpdate }: Props) {
    const [form] = Form.useForm();
    const [teams, setteams] = useState<Team[]>([]);
    const {getToken} = useAuth();
    
    useEffect(() => {
        const token = getToken();
        const options = {
            method: 'GET',
            url: `${BASEURL}/dashboard/team`,
            headers: {
                'x-token': `${token}`
            },
        }
        axios.request(options).then((res) => {
            setteams(res.data);
        });

    }, [])
    
    useEffect(() => {
        if (sellerDataForm) {
            form.setFieldsValue(sellerDataForm);
        } else {
            form.resetFields();
        }
    }, [sellerDataForm]);


    const onFinish = (values: SellerForm) => {
        const token = getToken();
        const options = {
            method: 'POST',
            url: `${BASEURL}/dashboard/seller`,
            headers: {
                'x-token': `${token}`
            },
            data: values
        };
        options.method = 'POST';
        axios.request(options).then((response) => {
            form.resetFields();
            message.success('Vendedor creado exitosamente');
            setrefresh(true);
            setIsModalOpen(false);
        }).catch((err) => {
            console.log(err);
            message.error('Error creando al vendedor');
        })

    }
    const onFinishUpdate = (values: any) => {
        const token = getToken();
        if(values.password===''){
            delete values.password
        }
        values._uid=sellerDataForm?._uid;

        const options = {
            method: '',
            url: `${BASEURL}/dashboard/seller`,
            headers: {
                'x-token': `${token}`
            },
            data:values
        };

        options.method = 'PUT';
        axios.request(options).then((response) => {
            form.resetFields();
            message.success('Vendedor actualizado exitosamente');
            setrefresh(true);
            setIsModalOpen(false);
        }).catch((err) => {
            console.log(err);
            message.error('Error actualizando al vendedor');
        })
    }
    return (
        <Form
            form={form}
            onFinish={isUpdate ?onFinishUpdate :onFinish}
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
                rules={[
                    {
                        required:true,
                        message: 'Por favor confirme su contraseña!',
                    },
                    { type: "email", message: 'El correo no es válido' }]}
            >
                <Input type='email' placeholder='Correo Electrónico' />
            </Form.Item>
            <Form.Item
                name='password'
                hasFeedback
                rules={[{ required: !isUpdate, message: 'La contraseña es obligatoria!' }, { min: 5, message: 'La contraseña es muy corta!' }]}
            >
                <Input.Password placeholder='Contraseña' />
            </Form.Item>

            <Form.Item
                name="confirm"
                dependencies={['password']}
                hasFeedback
                rules={[
                    {
                        required: !isUpdate,
                        message: 'Por favor confirme su contraseña!',
                    },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                            if(getFieldValue('password')!=''&&value===''){
                                return Promise.reject(new Error('Por favor confirme su contraseña!!'));
                            }
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
                    {
                        isUpdate
                            ? 'Actualizar vendedor'
                            : 'Crear vendedor'
                    }
                </Button>
            </Form.Item>
        </Form>
    )
}

export default MembersForm