import React from 'react'
import './Modal.css'

const Modal = ({ score }) => {
    return (
        <div className='modal'>
            <div className='modal-title'> Skore: {score}</div>
            <div className='modal-btn' onClick={() => window.location = "/"}>Yeniden Başla</div>
        </div>
    )
}

export default Modal
