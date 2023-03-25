import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, DatePicker, Divider, Form, Input, Col, Row, message } from 'antd'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BASEURL } from '../../api/config';

type Props = {}


function SponsorsForm({ }: Props) {
    const [form] = Form.useForm();
    const [eventsData, seteventsData] = useState();

    useEffect(()=>{
        const options = {
            method: 'GET',
            url: `${BASEURL}/settings/sponsor`,
            // headers: {
            //     'x-token': `${query.token}`
            // },
        }
        axios.request(options).then((res) => {
            seteventsData(res.data.sponsors);
            form.setFieldsValue(res.data);
            
        }).catch(err=>{
            message.error('Error al obtener los datos del evento');
        })
    },[])
    
    const onFinish = (values:any) =>{
        const options = {
            method: 'PUT',
            url: `${BASEURL}/settings/sponsor`,
            // headers: {
            //     'x-token': `${query.token}`
            // },
            data:values
        }
        axios.request(options).then((res) => {
            if(res.data?.message){
                message.success('Eventos actualizados exitosamente')
            }
        }).catch(err=>{
            message.error('Error al actualizar los datos del evento');
        })
    }

    return (
        <div>
            <Divider>
                <p>
                    Configuración de Patrocinadores
                </p>
            </Divider>
            <Form
                form={form}
                onFinish={onFinish}
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 14 }}
                layout="horizontal"
            >
                <Form.List name="sponsors">
                    {(fields, { add, remove }) => (
                        <>
                            {fields.map(({ key, name, ...restField }) => (
                                <div key={key} style={{ display: 'flex', marginBottom: '2rem', flexDirection: 'row' }} >
                                    <div style={{ flex: 'auto' }} >
                                        <Row gutter={[18, 0]}>
                                            <Col lg={12} >
                                                <Form.Item
                                                    name={[name, 'name']}
                                                    rules={[{ required: true, message: 'El título es obligatorio!' }]}
                                                    {...restField}
                                                    style={{width:"120%"}}
                                                >
                                                    <Input  placeholder='Título del evento' />
                                                </Form.Item>
                                            </Col>
                                            <Col lg={12} >
                                                <Form.Item
                                                    name={[name, 'img']}
                                                    rules={[{ type: 'url', message: 'El formato es incorrecto' }]}
                                                >
                                                    <Input placeholder='Url de la imagen'/>
                                                </Form.Item>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div style={{ width: '5rem', textAlign: 'center', paddingTop: '2rem' }}>
                                        <MinusCircleOutlined onClick={() => remove(name)} />
                                    </div>
                                </div>
                            ))}
                            <Form.Item style={{textAlign:'center'}}>
                                <Button type="dashed" onClick={() => fields.length < 100 ? add() : null} block icon={<PlusOutlined />}>
                                    Agregar patrocinador
                                </Button>
                            </Form.Item>
                        </>
                    )}
                </Form.List>
                <Form.Item>
                    <Button htmlType='submit' type="primary">
                        Guardar
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default SponsorsForm
