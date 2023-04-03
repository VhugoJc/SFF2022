import React, { useEffect, useState } from 'react';
import { message, Space, Table, TablePaginationConfig, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { Transaction } from '../../interfaces/Transaction';
import axios from 'axios';
import { BASEURL } from '../../api/config';
import moment from 'moment';

type Props = {}


const columns: ColumnsType<Transaction> = [
    {
        title: 'id',
        dataIndex: '_id',
        key: '_id',
        render: text => <a>{text.toString().slice(0, 8)}</a>,
    },
    {
        title: 'Comprador',
        dataIndex: 'usr',
        key: 'name',
        render: usr => <p>{usr?.name + ' ' + usr?.lastname}</p>
    },
    {
        title: 'Total',
        dataIndex: 'sale',
        key: 'amount',
        render: sale => <p>${(sale?.cost * sale?.amount).toFixed(2)}</p>
    },
    {
        title: 'Equipo',
        dataIndex: ['team', 'name'],
        key: 'team'
    },
    {
        title: 'Vendedor',
        dataIndex: 'seller',
        key: 'seller',
        render: usr => <p>{usr?.name + ' ' + usr?.lastname}</p>
    },
    {
        title: 'Fecha',
        dataIndex: ['sale', 'saleDate'],
        key: 'date',
        render: (date: Date) => <p>{new Date(date?.toString()).toLocaleString('es-MX')}</p>
    },
    // {
    //     title: 'Action',
    //     key: 'action',
    //     render: (_, record) => (
    //         <Space size="middle">
    //             <a>Invite {record.name}</a>
    //             <a>Delete</a>
    //         </Space>
    //     ),
    // },
];


function TransactionsTable({ }: Props) {
    const [TransactionsData, setTransactionsData] = useState<Transaction[] | undefined>([]);
    const [pagination, setpagination] = useState<TablePaginationConfig>({
        current: 1,
        pageSize:5
    })
    useEffect(() => {
        const getData = async () => {
            try {
                let response = await axios.get(BASEURL + '/transactions/all');
                if (response?.data) {
                    response.data.reverse(); // most recent first
                    setTransactionsData(response.data);
                }

            } catch (error) {
                message.error('Error recuperando las transacciones');
            }
        }
        getData();
    }, []);
    return (
        <div>
            <div>
                <br />
                <br />
                <p>Transacciones</p>
                <Table onChange={(pg:TablePaginationConfig)=>setpagination(pg)
                } rowKey={'_id'} pagination={pagination} columns={columns} dataSource={TransactionsData} />;
            </div>
            <div>
            </div>
        </div>
    )
}

export default TransactionsTable;