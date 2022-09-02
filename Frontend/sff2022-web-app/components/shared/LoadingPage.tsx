import { Spin } from 'antd'
import React from 'react'

type Props = {}

export default function 
({}: Props) {
  return (
    <div className='loading-container'>
        <Spin size='large'/>
    </div>
  )
}