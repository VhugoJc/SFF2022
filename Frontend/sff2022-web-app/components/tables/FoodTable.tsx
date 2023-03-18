import { EditOutlined, PlusOutlined, SearchOutlined } from '@ant-design/icons';
import { InputRef, message } from 'antd';
import { Button, Input, Space, Table } from 'antd';
import type { ColumnsType, ColumnType } from 'antd/es/table';
import type { FilterConfirmProps } from 'antd/es/table/interface';
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import Highlighter from 'react-highlight-words';
import { BASEURL } from '../../api/config';
import { Presale } from '../../interfaces/Presale';
import { Team } from '../../interfaces/teams';
import PresaleForm from '../forms/PresaleForm';
import Modal from '../Modal/Index';

type DataIndex = keyof Presale;

const Foodtable: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [refresh, setrefresh] = useState(true);
    const [isUpdate, setisUpdate] = useState(false);

    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef<InputRef>(null);

    const [foodData, setFoodData] = useState<Presale[]>([]);
    const [foodDataForm, setFoodDataForm] = useState<Presale>();
    const [teams, setteams] = useState<Team[]>([]);

    useEffect(() => {
        const options = {
            method: 'GET',
            url: `${BASEURL}/dashboard/presale`,
            // credentials
        }
        axios.request(options).then(res => {
            setFoodData(res.data);
        });
        setrefresh(false);
    }, [refresh])

    useEffect(() => {
        const conf = {
            method: 'GET',
            url: `${BASEURL}/dashboard/team`,
            // headers: {
            //     'x-token': `${query.token}`
            // },
        }
        axios.request(conf).then((res) => {
            setteams(res.data);
        });
    }, [])

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

    const onClickEdit = (data: Presale) => {        
        setFoodDataForm(data);
        setIsModalOpen(true);
        setisUpdate(true);
    }
    const onClickAdd = () => {
        setisUpdate(false);
        setFoodDataForm({
            _id:'',
            name:'',
            sellerId:'',
            cost:0,
            coverImg:'',
            tortas:0,
            description:'',
            products:[]
        })
        setIsModalOpen(true);
    }

    const getColumnSearchProps = (dataIndex: DataIndex): ColumnType<Presale> => ({
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

    const columns: ColumnsType<Presale> = [
        {
            title: 'Nombre',
            dataIndex: 'name',
            key: 'name',
            width: '30%',
            ...getColumnSearchProps('name'),
        },
        {
            title: 'Costo',
            dataIndex: 'cost',
            key: 'cost',
            width: '20%',
        },
        {
            title: 'Tortas',
            dataIndex: 'tortas',
            key: 'tortas',
            width: '20%',
        },
        {
            title: 'Equipo',
            dataIndex: 'sellerId',
            key: 'sellerId',
            width: '20%',
            render: (value, record) => {
                const team = teams.find(team => team._id === value);
                return team?.name
            },
            sorter: (a, b) => a.sellerId.localeCompare(b.sellerId as any),
            sortDirections: ['descend', 'ascend'],
        },
        {
            dataIndex: "link",
            title: "",
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
                <Button onClick={() => onClickAdd()} style={{ float: 'right' }} type='primary'>
                    <PlusOutlined /> Agregar Combo
                </Button>
            </div>

            <Table rowKey="_id" columns={columns} dataSource={foodData} />

            <Modal
                title={isUpdate ?'Actualizar '+foodDataForm?.name :'Crear nuevo combo'}
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
            >
                <PresaleForm setIsModalOpen={setIsModalOpen} foodDataForm={foodDataForm} setrefresh={setrefresh} isUpdate={isUpdate}/>
            </Modal>
        </>
    )
};

export default Foodtable;