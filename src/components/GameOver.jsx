import { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap'; // Import Bootstrap components
export default function GameOver({ winner }) {
    const [show, setShow] = useState(true);
    function handleClose() {
        setShow(show => !show);
    }
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title><span className='text-success fw-bold'>{winner}</span> Won</Modal.Title>
                </Modal.Header>
                <Modal.Body>Click retry to play it again</Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={handleClose}>
                        Retry
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}