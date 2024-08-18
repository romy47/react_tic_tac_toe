import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

export default function GameOver({ winner, retry }) {
    const [show, setShow] = useState(true);
    function handleRetry() {
        setShow(show => !show);
        retry();
    }
    let headerTitle = <span><span className='text-success fw-bold'>{winner}</span> Won</span>;
    if (!winner) {
        headerTitle = <span>Match Draw</span>;
    }
    return (
        <Modal show={show} onHide={handleRetry}>
            <Modal.Header closeButton>
                <Modal.Title>
                    {headerTitle}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>Click retry to play it again</Modal.Body>
            <Modal.Footer>
                <Button variant="success" onClick={handleRetry}>
                    Retry
                </Button>
            </Modal.Footer>
        </Modal>
    );
}