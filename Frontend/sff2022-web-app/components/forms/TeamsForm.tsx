import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons'
import { Button, Form, Input, message, Space } from 'antd'
import axios from 'axios';
import React, { Dispatch, SetStateAction, useState } from 'react'

import { BASEURL } from '../../api/config';

type Props = {
    setrefresh: Dispatch<SetStateAction<boolean>>
    setIsModalOpen: Dispatch<SetStateAction<boolean>>
}

function TeamsForm({ setrefresh, setIsModalOpen}: Props) {
    const [form] = Form.useForm();

    const onFinish = async (values: any) => {
        const { name, description, imgs, tiktok, whatsapp, facebook, instagram } = values;
        const data = {
            name, description, imgs,
            socialMedia: { tiktok, whatsapp, facebook, instagram }
        }
        const options = {
            method: 'POST',
            url: `${BASEURL}/dashboard/team`,
            // headers: {
            //     'x-token': `${query.token}`
            // },
            data
        };
        axios.request(options).then(function (response) {
            form.resetFields();
            message.success('Usuario creado exitosamente');
            setrefresh(true);
            setIsModalOpen(false);
            

        }).catch(function (error) {
            console.log(error);
            message.error('Error al crear el equipo');
        });

    }
    return (
        <Form
            form={form}
            onFinish={onFinish}
        >
            <Form.Item name='name' 
                rules={[{ required: true, message: 'El nombre es obligatorio!' },{min:4, message: 'El nombre es obligatorio!'}]}
            >
                <Input placeholder='Nombre del equipo' />
            </Form.Item>
            <Form.Item name='description'>
                <Input.TextArea placeholder='Descripción' />
            </Form.Item>
            Imagenes:
            <Form.List name="imgs">
                {(fields, { add, remove }) => (
                    <>
                        {fields.map(({ key, name, ...restField }) => (
                            <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                                <Form.Item
                                    style={{ width: "100%" }}
                                    {...restField}
                                    name={[name]}
                                // rules={[{ required: true, message: 'Missing first name' }]}
                                >
                                    <Input className='ant-input' placeholder="Url de imagen" />
                                </Form.Item>
                                <MinusCircleOutlined onClick={() => remove(name)} />
                            </Space>
                        ))}
                        <Form.Item>
                            <Button type="dashed" onClick={() => fields.length < 6 ? add() : null} block icon={<PlusOutlined />}>
                                Agregar Url
                            </Button>
                        </Form.Item>
                    </>
                )}
            </Form.List>
            Redes sociales:
            <Form.Item name='tiktok'>
                <Input placeholder='Url Tiktok' />
            </Form.Item>
            <Form.Item name='whatsapp'>
                <Input placeholder='Url Whatsapp' />
            </Form.Item>
            <Form.Item name='facebook'>
                <Input placeholder='Url Facebook' />
            </Form.Item>
            <Form.Item name='instagram'>
                <Input placeholder='Url Instagram' />
            </Form.Item>            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    )
}

export default TeamsForm