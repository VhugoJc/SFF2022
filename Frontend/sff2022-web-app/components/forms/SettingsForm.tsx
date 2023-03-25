import { Button, DatePicker, Divider, Form, Input, message } from 'antd'
import axios from 'axios'
import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { BASEURL } from '../../api/config'

type Props = {}


function SettingsForm({ }: Props) {
    const [settings, setSettings] = useState<any>();
    const [form] = Form.useForm();

    useEffect(() => {
        const options = {
            method: 'GET',
            url: `${BASEURL}/settings/data`,
            // headers: {
            //     'x-token': `${query.token}`
            // },
        }
        axios.request(options).then((res) => {
            setSettings(res.data.settings);
            form.setFieldsValue(res.data.settings);
            form.setFieldsValue({
                date:moment(res.data.settings.date)
            })

        }).catch(err => {
            message.error('Error al obtener los datos del evento');
        })
    }, [])

    const onFinish = (values: any) => {
        const options = {
            method: 'PUT',
            url: `${BASEURL}/settings`,
            // headers: {
            //     'x-token': `${query.token}`
            // },
            data:values
        }
        axios.request(options).then((res) => {
            if(res.data?.message){
                message.success('Configuración actualizada exitosamente')
            }
        }).catch(err=>{
            message.error('Error al actualizar los datos de configuración');
        })

    }
    return (
        <div>
            <Divider>
                <p>
                    Configuración General
                </p>
            </Divider>
            <Form
                form={form}
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 14 }}
                layout="horizontal"
                onFinish={onFinish}
            >
                <Form.Item
                    name="webSite"
                    label="Sitio web"
                    rules={[{ required: true, message: 'El campo es obligatorio' }, { type: 'url', message: 'El formato no es válido' },]}
                >
                    <Input placeholder="Url sitio de contacto" />
                </Form.Item>
                <Form.Item
                    name="logo"
                    label="Logo"
                    rules={[{ required: true, message: 'El campo es obligatorio' }, { type: 'url', message: 'El formato no es válido' },]}
                >
                    <Input placeholder="Url del logo" />
                </Form.Item>

                <Form.Item

                    initialValue={moment(settings?.date)}
                    label="Fecha"
                    name="date"
                    rules={[{ required: true, message: 'El campo es obligatorio' }, { type: "date", warningOnly: true }]}
                >
                    <DatePicker />
                </Form.Item>
                <Divider>
                    <p>
                        Configuración Pantalla principal
                    </p>
                </Divider>
                <Form.List name='homeData'>
                    {(fields, { add, remove }) => (
                        <>
                            <Form.Item
                                name="img"
                                label="imagen"
                                rules={[{ required: true, message: 'El campo es obligatorio' }, { type: 'url', message: 'El formato no es válido' },]}
                            >
                                <Input placeholder="Url imagen Home" />
                            </Form.Item>
                            <Form.Item
                                name="title"
                                label="titulo"
                                rules={[{ required: true, message: 'El campo es obligatorio' }]}
                            >
                                <Input placeholder="Título en Home" />
                            </Form.Item>
                            <Form.Item
                                name="description"
                                label="descripción"
                                rules={[{ required: true, message: 'El campo es obligatorio' }]}
                            >
                                <Input.TextArea placeholder="Descripción en Home" />
                            </Form.Item>
                            <Form.Item
                                name="url"
                                label="Url"
                                rules={[{ required: true, message: 'El campo es obligatorio' }, { type: 'url', message: 'El formato no es válido' },]}
                            >
                                <Input placeholder="Url para visitar en Home" />
                            </Form.Item>
                        </>
                    )}
                </Form.List>
                <Form.Item label=" ">
                    <Button htmlType='submit' type="primary">
                        Guardar
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default SettingsForm
