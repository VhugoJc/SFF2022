import { Col, List, Row } from 'antd'
import React, { useEffect, useState } from 'react'

type Props = {
    data:Array<any>,
    type: "balance" | "tortas" | "presales"
}


function ListSales({data,type}: Props) {
    const [newData, setnewData] = useState<any>([]);

    useEffect(()=>{
        let newSort;
        switch(type){
            case 'balance':
                newSort = data.sort(function(a, b) {
                    return a.transaction.balance - b.transaction.balance;
                });
                break;
            
            case 'tortas':
                newSort = data.sort(function(a, b) {
                    return a.transaction.tortas - b.transaction.tortas;
                });
                break;
            
            case 'presales':
                newSort = data.sort(function(a, b) {
                    return a.transaction.presales - b.transaction.presales;
                });
                break;
            
            default:
                newSort=[];
                break;
            
        }
        setnewData(newSort.reverse());

        
    },[type]);

    
    
    const getValue = (item:any) =>{
        
        let aux = '';
        switch(type){
            case 'balance':
                aux= '$'+(item?.transaction.balance).toFixed(2)
                break;
            
            case 'tortas':
                aux= item?.transaction.tortas
                break;
            
            case 'presales':
                aux= item?.transaction.presales
                break;
            
            default:
                break;
            
        }
        return aux;
    }
    return (
        <div>
            <Row>
                <Col xl={2} />
                <Col lg={20}>
                    <List
                        itemLayout='horizontal'
                        dataSource={newData as any}
                        renderItem={(item:any, index) => (
                            <List.Item
                                actions={[<p>#{index + 1}</p>]}
                            >
                                <List.Item.Meta
                                    avatar={
                                        <img
                                            src={item.team.logo}
                                            style={{ width: "5vh", height: "5vh", objectFit: "cover" }}
                                        />
                                    }
                                    title={item?.team.name}
                                />
                                <div>
                                    {
                                        getValue(item)
                                    }
                                </div>
                            </List.Item>
                        )}
                    />
                </Col>
                <Col xl={2} />
            </Row>
        </div>
    )
}

export default ListSales