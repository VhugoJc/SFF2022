import { Card, Col, Image, Row } from 'antd'
import React from 'react'
import LoginForm from '../../../components/forms/LoginForm'

type Props = {}

function login({ }: Props) {
    return (
        <div className='login'>

            <Card className='login-card'>
                <Image className="login-card-img" src='/assets/img/logo.png' preview={false} alt='Sales Force Fest 2022' />
                <LoginForm />
            </Card>
        </div>
    )
}

export default login