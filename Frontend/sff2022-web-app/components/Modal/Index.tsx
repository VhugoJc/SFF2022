import { Button, Modal as AntdModal } from 'antd';
import { useState } from 'react';

interface Modal {
    isModalOpen: boolean,
    setIsModalOpen: (state:boolean) => void,
    title?:string,
    children:React.ReactNode
}


const Modal = ({ isModalOpen, setIsModalOpen,title, children }: Modal) => {

    const onCancelHandle=()=>{
    setIsModalOpen(false)
}

    return (
        <>
            <AntdModal title={title} visible={isModalOpen} onCancel={onCancelHandle} footer={null}>
                {children}
            </AntdModal>
        </>
    );
};

export default Modal;