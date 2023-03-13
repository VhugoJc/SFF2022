import { EditOutlined, PlusOutlined, SearchOutlined } from '@ant-design/icons';
import type { InputRef } from 'antd';
import { Button, Input, Space, Table } from 'antd';
import type { ColumnsType, ColumnType } from 'antd/es/table';
import type { FilterConfirmProps } from 'antd/es/table/interface';
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import Highlighter from 'react-highlight-words';
import { BASEURL } from '../../api/config';
import { Seller } from '../../interfaces/seller';
import MembersForm from '../forms/MembersForm';

import Modal from '../Modal/Index';
// import Highlighter from 'react-highlight-words';

interface DataType {
    key: string;
    name: string;
    age: number;
    address: string;
}

type DataIndex = keyof DataType;

const data: DataType[] = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
    },
    {
        key: '2',
        name: 'Joe Black',
        age: 42,
        address: 'London No. 1 Lake Park',
    },
    {
        key: '3',
        name: 'Jim Green',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
    },
    {
        key: '4',
        name: 'Jim Red',
        age: 32,
        address: 'London No. 2 Lake Park',
    },
];

type Props = {}

function MembersTable({ }: Props) {
    const [usersData, setUsersData]= useState<Seller [] >([]);
    
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [refresh, setrefresh] = useState(true);

    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const [isUpdate, setisUpdate] = useState(false);
    const searchInput = useRef<InputRef>(null);
    
    
    useEffect(()=>{
        const options = { // Same url, different method between update and create
            method: 'GET',
            url: `${BASEURL}/dashboard/seller`,
            // headers: {
            //     'x-token': `${query.token}`
            // },
        };
        axios.request(options).then((response)=>{
            setUsersData(response.data);
        }).catch((err)=>{

        });

        setrefresh(false);
    },[refresh])

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

    const getColumnSearchProps = (dataIndex: DataIndex): ColumnType<DataType> => ({
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

    const onClickEdit=(data:DataType)=>{
        setIsModalOpen(true);
        // send data to forms
        console.log(data);
        

    }
    const columns: ColumnsType<DataType> = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            width: '30%',
            ...getColumnSearchProps('name'),
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
            width: '20%',
            ...getColumnSearchProps('age'),
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
            ...getColumnSearchProps('address'),
            sorter: (a, b) => a.address.length - b.address.length,
            sortDirections: ['descend', 'ascend'],
        },
        {
            dataIndex: "link",
            title: "",
            render: (value,record) => {
                return (
                    <a
                        onClick={(event) =>  onClickEdit(record)
                        }
                        href={value}
                        target="_blank"
                    >
                        <EditOutlined/>
                    </a>
                );
            }
        }
    ];
  
    return (
        <>
            <div style={{ width: '100%', height: '100px' }}>
                <Button onClick={()=>setIsModalOpen(true)} style={{ float: 'right' }} type='primary'>
                    <PlusOutlined /> Agregar Integrantes
                </Button>
            </div>

            <Table columns={columns} dataSource={data} />

            <Modal
                title='Nuevo Vendedor'
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
            >
                <MembersForm/>
            </Modal>
        </>
    )
        ;
}

export default MembersTable