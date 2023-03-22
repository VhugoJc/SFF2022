import React, { useEffect, useState } from 'react'
import { EditOutlined } from '@ant-design/icons';
import { Avatar, Button, List, message, Space } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import Modal from '../Modal/Index';
import TeamsForm from '../forms/TeamsForm';
import { BASEURL } from '../../api/config';
import axios from 'axios';
import { Team, TeamForm } from '../../interfaces/teams';

type Props = {}

function ListTeams({ }: Props) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [teamsData, setteamsData] = useState<Team[]|[]>([]);
    const [refresh, setrefresh] = useState(true);
    const [teamDataForm, setteamDataForm] = useState<TeamForm|null>(null);
    const [isUpdate, setisUpdate] = useState(false);


    useEffect(() => {
        // get teams from deb
        const options = {
            method: 'GET',
            url: `${BASEURL}/dashboard/team`,
            // headers: {
            //     'x-token': `${query.token}`
            // },
        };
        //request
        axios.request(options).then(function (response) {
            setteamsData(response.data); // assign values to usestate

        }).catch(function (error) {
            console.log(error);
            message.error('Error al obtener los equipos'); // show error message
        });
        setrefresh(false); //reset refresh variable
    }, [refresh]) // update when refresh variable changes

    const onClickToAdd = () => {
        setteamDataForm({
            name:"",
            imgs:[],
            description:"",
            facebook:"",
            whatsapp:"",
            tiktok: "",
            instagram: "",
            logo:""
        });
        setIsModalOpen(true);
        setisUpdate(false);
    }
    
    const onClickToEdit = (teamData:Team) => {
        console.log(teamData);
        
        setteamDataForm({
            _id:teamData?._id,
            name:teamData?.name,
            imgs:teamData?.imgs,
            description:teamData?.description,
            facebook:teamData?.socialMedia.facebook,
            whatsapp: teamData?.socialMedia.whatsapp,
            tiktok: teamData?.socialMedia.tiktok,
            instagram: teamData?.socialMedia.instagram,
            logo:teamData?.logo
        });
        setIsModalOpen(true);
        setisUpdate(true);
    }

    return (
        <div>
            <div style={{ width: '100%', height: '100px' }}>
                <Button onClick={() => onClickToAdd()} style={{ float: 'right' }} type='primary'>
                    <PlusOutlined /> Agregar Equipos
                </Button>
            </div>
            <div>
                <List
                    itemLayout="vertical"
                    size="large"
                    pagination={{
                        onChange: page => {
                            // console.log(page);
                        },
                        pageSize: 3,
                    }}
                    dataSource={teamsData}
                    renderItem={item => (
                        <a onClick={()=>onClickToEdit(item)}>
                            <List.Item
                                key={item.name as any}
                                extra={
                                    <img
                                        width={272}
                                        alt="logo"
                                        src={item?.logo ? item?.logo : "https://www.nbmchealth.com/wp-content/uploads/2018/04/default-placeholder.png"}
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
                title={isUpdate ?'Editar '+teamDataForm?.name :'Nuevo Equipo'}
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
            >
                <TeamsForm teamData={teamDataForm} setrefresh={setrefresh}  setIsModalOpen={setIsModalOpen} isUpdate={isUpdate}/>
            </Modal>
        </div>
    )
}

export default ListTeams