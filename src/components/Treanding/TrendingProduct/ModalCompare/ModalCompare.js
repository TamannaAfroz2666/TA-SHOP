import React, { useState } from 'react';
import './ModalCompare.css';
import Modal from 'react-bootstrap/Modal';

const ModalCompare = (show1) => {
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);
    return (
        <div className='modalCompare'>
            <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Modal body content
                </Modal.Body>
            </Modal>


        </div>
    );
};

export default ModalCompare;