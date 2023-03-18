import { EditOutlined, PlusOutlined, SearchOutlined } from '@ant-design/icons';
import { InputRef, message } from 'antd';
import { Button, Input, Space, Table } from 'antd';
import type { ColumnsType, ColumnType } from 'antd/es/table';
import type { FilterConfirmProps } from 'antd/es/table/interface';
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import Highlighter from 'react-highlight-words';
import { BASEURL } from '../../api/config';
import { Seller, SellerForm } from '../../interfaces/seller';
import { Team } from '../../interfaces/teams';
import MembersForm from '../forms/MembersForm';

import Modal from '../Modal/Index';
// import Highlighter from 'react-highlight-words';

type DataIndex = keyof Seller;



type Props = {}

function MembersTable({ }: Props) {
    const [usersData, setUsersData] = useState<Seller[]>([]);
    const [sellerDataForm, setsellerDataForm] = useState<SellerForm|null>(null);
    const [teams, setteams] = useState<Team[]>([]);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [refresh, setrefresh] = useState(true);

    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const [isUpdate, setisUpdate] = useState(false);
    const searchInput = useRef<InputRef>(null);
    
    useEffect(() => {
        const options = {
            method: 'GET',
            url: `${BASEURL}/dashboard/team`,
            // headers: {
            //     'x-token': `${query.token}`
            // },
        }
        axios.request(options).then((res) => {
            setteams(res.data);
        });

    }, [])

    useEffect(() => {
        const options = { // Same url, different method between update and create
            method: 'GET',
            url: `${BASEURL}/dashboard/seller`,
            // headers: {
            //     'x-token': `${query.token}`
            // },
        };
        axios.request(options).then((response) => {

            setUsersData(response.data);
            console.log(response.data);

        }).catch((err) => {
            message.error('Error al cargar los vendedores');
        });

        setrefresh(false);
    }, [refresh])

    const handleSearch = (
        selectedKeys: string[],
        confirm: (param?: FilterConfirmProps) => void,
        dataIndex: DataIndex,
    ) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };

    const handleReset = (clearFilters: () => void) => {
        clearFilters();
        setSearchText('');
    };

    const getColumnSearchProps = (dataIndex: DataIndex): ColumnType<Seller> => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
            <div style={{ padding: 8 }} onKeyDown={e => e.stopPropagation()}>
                <Input
                    ref={searchInput}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
                    style={{ marginBottom: 8, display: 'block' }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{ width: 90 }}
                    >
                        Search
                    </Button>
                    <Button
                        onClick={() => clearFilters && handleReset(clearFilters)}
                        size="small"
                        style={{ width: 90 }}
                    >
                        Reset
                    </Button>
                    {/* <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            confirm({ closeDropdown: false });
                            setSearchText((selectedKeys as string[])[0]);
                            setSearchedColumn(dataIndex);
                        }}
                    >
                        Filter
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            close();
                        }}
                    >
                        close
                    </Button> */}
                </Space>
            </div>
        ),
        filterIcon: (filtered: boolean) => (
            <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />
        ),
        onFilter: (value, record) =>
            record[dataIndex]
                .toString()
                .toLowerCase()
                .includes((value as string).toLowerCase()),
        // onFilterDropdownOpenChange: visible => {
        //     if (visible) {
        //         setTimeout(() => searchInput.current?.select(), 100);
        //     }
        // },
        render: text =>
            searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
                    searchWords={[searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ''}
                />
            ) : (
                text
            ),
    });

    const onClickEdit = (data: Seller) => {
        setisUpdate(true);
        setsellerDataForm({
            _uid:data._uid,
            name: data.name,
            lastname:data.lastname,
            email:data.email,
            password:'',
            confirm:'',
            team:data.team
        });
        setIsModalOpen(true);
    }
    const onClickAdd = () => {
        setisUpdate(false);
        setsellerDataForm(null);
        setIsModalOpen(true);
    }


    const columns: ColumnsType<Seller> = [
        {
            title: 'Nombre(s)',
            dataIndex: 'name',
            key: 'name',
            width: '20%',
            ...getColumnSearchProps('name'),
        },
        {
            title: 'Apellido(s)',
            dataIndex: 'lastname',
            key: 'lastname',
            width: '20%',
            ...getColumnSearchProps('lastname'),
        },
        {
            title: 'Correo Electrónico',
            dataIndex: 'email',
            key: 'email',
            width: '20%',
            ...getColumnSearchProps('email'),
        },
        {
            title: 'Equipo',
            dataIndex: 'team',
            key: 'team',
            width: '20%',
            render: (value, record)=>{
                const team = teams.find(team=>team._id===value);
                return team?.name
            },
            sorter: (a, b) => a.team.localeCompare(b.team as any),
            sortDirections: ['descend', 'ascend'],
            // ...getColumnSearchProps('team'),
        },
        // {
        //     title: 'Address',
        //     dataIndex: 'address',
        //     key: 'address',
        //     ...getColumnSearchProps('address'),
        //     sorter: (a, b) => a.address.length - b.address.length,
        //     sortDirections: ['descend', 'ascend'],
        // },
        {
            dataIndex: "link",
            title: "",
            width: '5%',
            render: (value, record) => {
                return (
                    <a
                        onClick={(event) => onClickEdit(record)
                        }
                        href={value}
                        target="_blank"
                    >
                        <EditOutlined />
                    </a>
                );
            }
        }
    ];

    return (
        <>
            <div style={{ width: '100%', height: '100px' }}>
                <Button onClick={()=>onClickAdd()} style={{ float: 'right' }} type='primary'>
                    <PlusOutlined /> Agregar Integrantes
                </Button>
            </div>

            <Table columns={columns} rowKey="_uid" dataSource={usersData} />

            <Modal
                title={isUpdate ?'Actualizando a '+sellerDataForm?.name :'Nuevo vendedor'}
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
            >
                <MembersForm 
                    setIsModalOpen={setIsModalOpen} 
                    setrefresh={setrefresh} 
                    sellerDataForm={sellerDataForm}
                    isUpdate={isUpdate }
                />
            </Modal>
        </>
    )
        ;
}

export default MembersTable