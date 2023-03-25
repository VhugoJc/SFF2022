import { Button, DatePicker, Divider, Form, Input } from 'antd'
import React from 'react'

type Props = {}

const { RangePicker } = DatePicker;

function SettingsForm({ }: Props) {
    return (
        <div>
            <Divider>
                <p>
                    Configuración General
                </p>
            </Divider>
            <Form
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 14 }}
                layout="horizontal"
            >
                <Form.Item
                    name="website"
                    label="Sitio web"
                    rules={[{ required: true }, { type: 'url', warningOnly: true }, { type: 'string', min: 6 }]}
                >
                    <Input placeholder="Url sitio de contacto" />
                </Form.Item>
                <Form.Item
                    name="logo"
                    label="Logo"
                    rules={[{ required: true }, { type: 'url', warningOnly: true }, { type: 'string', min: 6 }]}
                >
                    <Input placeholder="Url del logo" />
                </Form.Item>

                <Form.Item
                    label="Fecha"
                    name="date"
                    rules={[{ required: true }, { type: "date", warningOnly: true }]}
                >
                    <DatePicker />
                </Form.Item>

                <Form.Item label=" ">
                    <Button type="primary">
                        Guardar
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default SettingsForm
