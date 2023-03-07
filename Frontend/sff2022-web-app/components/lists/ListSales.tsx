import { Col, List, Row } from 'antd'
import React from 'react'

type Props = {
    data:Array<Object>
}

function ListSales({data }: Props) {
    return (
        <div>
            <Row>
                <Col xl={2} />
                <Col lg={20}>
                    <List
                        itemLayout='horizontal'
                        dataSource={data}
                        renderItem={(item, index) => (
                            <List.Item
                                actions={[<p>#{index + 1}</p>]}
                            >
                                <List.Item.Meta
                                    avatar={
                                        <img
                                            src='https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png'
                                            style={{ width: "5vh", height: "5vh", objectFit: "cover" }}
                                        />
                                    }
                                    title={item.title}

                                />
                                <div>
                                    $12200.22
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