import { Spin } from 'antd'
import React from 'react'

export const LoadingPage = () => {
  return (
    <div className='loading-container'>
      <Spin size='large' />
    </div>
  )
}
