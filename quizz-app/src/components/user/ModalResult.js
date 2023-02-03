import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const ModalResult = (props) => {
    //Props
    const { show, setShow } = props;

    //Close Modal
    const handleClose = () => {
        setShow(false);
    };

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Kết quả của bạn</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>Tổng câu hỏi:{props.dataModalResult.countTotal}</div>
                    <div>Câu hỏi đúng:{props.dataModalResult.countCorrect}</div>
                </Modal.Body>
                <Modal.Footer>

                    <Button variant="primary">
                        Show answer
                    </Button>
                    <Button variant="secondary" onClick={handleClose}>
                        Dong
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalResult;