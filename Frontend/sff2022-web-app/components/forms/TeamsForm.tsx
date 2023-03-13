import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons'
import { Button, Form, Input, message, Space } from 'antd'
import axios from 'axios';
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'

import { BASEURL } from '../../api/config';
import { TeamForm } from '../../interfaces/teams';

type Props = {
    setrefresh: Dispatch<SetStateAction<boolean>>
    setIsModalOpen: Dispatch<SetStateAction<boolean>>
    teamData: TeamForm | null
    isUpdate: boolean
}

function TeamsForm({ setrefresh, setIsModalOpen, teamData, isUpdate }: Props) {
    const [form] = Form.useForm();
    useEffect(() => {
        form.setFieldsValue(teamData);
    }, [teamData]);

    const onFinish = async (values: any) => {
        const { name, description, imgs, tiktok, whatsapp, facebook, instagram } = values;
        const data = {
            name, description, imgs,_id:teamData?._id,
            socialMedia: { tiktok, whatsapp, facebook, instagram }
        }
        const options = { // Same url, different method between update and create
            method: '',
            url: `${BASEURL}/dashboard/team`,
            // headers: {
            //     'x-token': `${query.token}`
            // },
            data
        };

        if (!isUpdate) { //create
            options.method = 'POST';
            axios.request(options).then(function (response) {
                form.resetFields();
                message.success('Equipo creado exitosamente');
                setrefresh(true);
                setIsModalOpen(false);
            }).catch(function (error) {
                console.log(error);
                message.error('Error al crear el equipo');
            });
        } else { // update 
            options.method = 'PUT';
            axios.request(options).then(function (response) {
                form.resetFields();
                message.success('Equipo actualizado exitosamente');
                setrefresh(true);
                setIsModalOpen(false);
            }).catch(function (error) {
                console.log(error);
                message.error('Error al actualizar el equipo');
            });
        }

    }
    return (
        <Form
            // initialValues={teamData as any}
            form={form}
            onFinish={onFinish}
        >
            <Form.Item name='name'
                rules={[{ required: true, message: 'El nombre es obligatorio!' }, { min: 4, message: 'El nombre es obligatorio!' }]}
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
                                    rules={[{type:'url',message:'La url no es válida'}]}
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
            <Form.Item name='tiktok' rules={[{type:'url',message:'La url no es válida'}]}>
                <Input placeholder='Url Tiktok' />
            </Form.Item>
            <Form.Item name='whatsapp' rules={[{type:'url',message:'La url no es válida'}]}>
                <Input placeholder='Url Whatsapp' />
            </Form.Item>
            <Form.Item name='facebook' rules={[{type:'url',message:'La url no es válida'}]}>
                <Input placeholder='Url Facebook' />
            </Form.Item>
            <Form.Item name='instagram' rules={[{type:'url',message:'La url no es válida'}]}>
                <Input placeholder='Url Instagram' />
            </Form.Item>            <Form.Item>
                <Button type="primary" htmlType="submit">
                    {isUpdate ?"Actualizar" :"Crear"}
                </Button>
            </Form.Item>
        </Form>
    )
}

export default TeamsForm