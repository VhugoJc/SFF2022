import React, { useState } from 'react'
import { EditOutlined } from '@ant-design/icons';
import { Avatar, Button, List, Space } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import Modal from '../Modal/Index';

type Props = {}

const data = Array.from({ length: 23 }).map((_, i) => ({
    href: 'https://ant.design',
    title: `ant design part ${i}`,
    avatar: 'https://joeschmoe.io/api/v1/random',
    description:
        'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
        'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
}));


function ListTeams({ }: Props) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const onClick = () => {
        setIsModalOpen(true);
    }

    return (
        <div>
            <div style={{ width: '100%', height: '100px' }}>
                <Button style={{ float: 'right' }} type='primary'>
                    <PlusOutlined /> Agregar Equipos
                </Button>
            </div>
            <div>
                <List
                    itemLayout="vertical"
                    size="large"
                    pagination={{
                        onChange: page => {
                            console.log(page);
                        },
                        pageSize: 3,
                    }}
                    dataSource={data}
                    footer={
                        <div>
                            <b>ant design</b> footer part
                        </div>
                    }
                    renderItem={item => (
                        <a onClick={onClick}>
                            <List.Item
                                key={item.title}
                                extra={
                                    <img
                                        width={272}
                                        alt="logo"
                                        src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                                    />
                                }
                            >
                                <List.Item.Meta
                                    title={<p>{item.title}</p>}
                                    description={item.description}
                                />
                                {item.content}
                            </List.Item>
                        </a>
                    )}
                />
            </div>
            <Modal
                title='Equipo'
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
            >
                Hola mundo
            </Modal>
        </div>
    )
}

export default ListTeams