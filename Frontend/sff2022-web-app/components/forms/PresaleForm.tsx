import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Col, Form, Input, InputNumber, message, Row, Select, Space } from 'antd'
import TextArea from 'antd/lib/input/TextArea';
import axios from 'axios';
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { BASEURL } from '../../api/config';
import { Presale } from '../../interfaces/Presale';
import { Team } from '../../interfaces/teams';
import useAuth from '../../Hooks/useAuth';

type Props = {
    setrefresh: Dispatch<SetStateAction<boolean>>,
    setIsModalOpen: Dispatch<SetStateAction<boolean>>,
    foodDataForm: Presale | undefined,
    isUpdate: boolean
}

function PresaleForm({ setrefresh, setIsModalOpen, foodDataForm, isUpdate }: Props) {
    const [form] = Form.useForm();
    const [teams, setteams] = useState<Team[]>([]);
    const {getToken} = useAuth();

    useEffect(() => {
        form.setFieldsValue(foodDataForm);
    }, [foodDataForm])

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

    const onFinish = (values: any) => {
        const token = getToken();
        const options = {
            method: '',
            url: `${BASEURL}/dashboard/presale`,
            //admin credentials
            headers: {
                'x-token': `${token}`
            },
            data: values
        }
        if (!isUpdate) {
            // create new COMBO
            options.method = 'POST';
            axios.request(options).then(res => {
                message.success('Combo creado exitosamente');
                form.resetFields();
                setrefresh(true);
                setIsModalOpen(false);
            }).catch(err => {
                console.log(err);
                message.error('Error creando combo');
            })
        } else {
            // update COMBO
            options.method = 'PUT';
            options.data._id=foodDataForm?._id;
            axios.request(options).then(res => {
                message.success('Combo actualizado exitosamente');
                form.resetFields();
                setrefresh(true);
                setIsModalOpen(false);
            }).catch(err => {
                console.log(err);
                message.error('Error actualizando combo');
            })
        }
    }
    return (
        <Form
            form={form}
            onFinish={onFinish}
        >
            Equipo
            <Form.Item
                name='sellerId'
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
            <Form.Item
                name='name'
                rules={[{ required: true, message: 'El nombre es obligatorio!' }, { min: 2, message: 'El nombre es obligatorio!' }]}
            >
                <Input placeholder='Nombre' />
            </Form.Item>
            <Form.Item
                name='cost'
                rules={[
                    { required: true, message: 'El costo es obligatorio!' },
                    () => ({
                        validator(_, value) {

                            if (!value || value >= 0) {
                                return Promise.resolve();
                            }

                            return Promise.reject(new Error('El costo no es correcto'));
                        },
                    }),
                ]}
            >
                <InputNumber step='0.50' style={{ width: '100%' }} prefix='$' addonAfter='MXN' placeholder='Costo' />
            </Form.Item>

            <Form.Item
                name='coverImg'
                rules={[{ type: 'url', message: 'El formato no es una URL' }, { required: true, message: 'La portada es obligatoria!' }]}
            >
                <Input type='url' placeholder='URL imagen Portada' />
            </Form.Item>
            <Form.Item

                name='tortas'
                rules={[
                    { required: true, message: 'La cantidad de tortas es obligatori!' },
                    () => ({
                        validator(_, value) {

                            if (!value || value >= 0) {
                                return Promise.resolve();
                            }

                            return Promise.reject(new Error('La cantidad no es correcta'));
                        },
                    }),
                ]}
            >
                <InputNumber addonAfter='Tortas' style={{ width: '100%' }} placeholder='Cantidad de tortas' />
            </Form.Item>
            <Form.Item
                name='description'
            >
                <TextArea placeholder='Descripción' />
            </Form.Item>
            Productos:
            <Form.List name="products">
                {(fields, { add, remove }) => (
                    <>
                        {fields.map(({ key, name, ...restField }) => (
                            <div key={key} style={{ display: 'flex', marginBottom: '2rem', flexDirection: 'row' }} >
                                <div style={{ flex: 'auto' }} >
                                    <Row gutter={[18, 0]}>
                                        <Col lg={12}>
                                            <Form.Item
                                                name={[name, 'name']}
                                                rules={[{ required: true, message: 'El nombre es obligatorio!' }]}
                                                {...restField}
                                            >
                                                <Input placeholder='Nombre' />
                                            </Form.Item>
                                        </Col>
                                        <Col lg={12}>
                                            <Form.Item
                                                name={[name, 'img']}
                                                rules={[{ type: 'url', message: 'El formato es incorrecto' }]}
                                            >
                                                <Input placeholder='Url de la imagen' />
                                            </Form.Item>
                                        </Col>
                                        <Col lg={24}>
                                            <Form.Item
                                                name={[name, 'description']}
                                            >
                                                <TextArea placeholder='Descripción' />
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </div>
                                <div style={{ width: '5rem', textAlign: 'center', paddingTop: '2rem' }}>
                                    <MinusCircleOutlined onClick={() => remove(name)} />
                                </div>
                            </div>

                        ))}
                        <Form.Item>
                            <Button type="dashed" onClick={() => fields.length < 7 ? add() : null} block icon={<PlusOutlined />}>
                                Agregar producto
                            </Button>
                        </Form.Item>

                        <Button type='primary' htmlType='submit'>
                            {
                                isUpdate
                                ? 'Actualizar'
                                : ' Crear combo'
                            }
                        </Button>
                    </>
                )}
            </Form.List>
        </Form>
    )
}

export default PresaleForm