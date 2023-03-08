import React, { useEffect, useState } from 'react'
import { EditOutlined } from '@ant-design/icons';
import { Avatar, Button, List, message, Space } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import Modal from '../Modal/Index';
import TeamsForm from '../forms/TeamsForm';
import { BASEURL } from '../../api/config';
import axios from 'axios';
import { Team } from '../../interfaces/teams';

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
    const [teamsData, setteamsData] = useState<Team[]|[]>([]);
    const [refresh, setrefresh] = useState(true);

    useEffect(() => {
        const options = {
            method: 'GET',
            url: `${BASEURL}/dashboard/team`,
            // headers: {
            //     'x-token': `${query.token}`
            // },
        };
        axios.request(options).then(function (response) {
            setteamsData(response.data);
            console.log(response.data);

        }).catch(function (error) {
            console.log(error);
            message.error('Error al obtener los equipos');
        });
        setrefresh(false);
    }, [refresh])
    const onClick = () => {
        setIsModalOpen(true);
    }

    return (
        <div>
            <div style={{ width: '100%', height: '100px' }}>
                <Button onClick={() => onClick()} style={{ float: 'right' }} type='primary'>
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
                    dataSource={teamsData}
                    // footer={
                    //     <div>
                    //         <b>ant design</b> footer part
                    //     </div>
                    // }
                    renderItem={item => (
                        <a onClick={onClick}>
                            <List.Item
                                key={item.name as any}
                                extra={
                                    <img
                                        width={272}
                                        alt="logo"
                                        src={item.imgs![0] ? item.imgs![0] : "https://www.nbmchealth.com/wp-content/uploads/2018/04/default-placeholder.png"}
                                    />
                                }
                            >
                                <List.Item.Meta
                                    title={<p>{item.name}</p>}
                                    description={Object.keys(item.socialMedia).map(function (key, index) {
                                        if (item.socialMedia[key]) {
                                            return <span key={key}>{item.socialMedia[key]} </span>
                                        }

                                    })}
                                />
                                {
                                    item.description
                                }
                            </List.Item>
                        </a>
                    )}
                />
            </div>
            <Modal
                title='Nuevo Equipo'
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
            >
                <TeamsForm setrefresh={setrefresh}  setIsModalOpen={setIsModalOpen}/>
            </Modal>
        </div>
    )
}

export default ListTeams