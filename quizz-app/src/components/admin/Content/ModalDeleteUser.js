import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { BsPlusLg } from 'react-icons/bs';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { putUpdateNewUser } from '../../../services/apiService'
import _ from "lodash";

const ModalDeleteUser = (props) => {
    //Props
    const { show, setShow, dataUpdate } = props;
    // console.log(props.dataUpdate.email)
    // //UseState
    // const [id, setId] = useState("");
    // const [email, setEmail] = useState(props.dataUpdate.email);
    // const [password, setPassword] = useState("");
    // const [username, setUsername] = useState("");
    // const [role, setRole] = useState("user");
    // const [image, setImage] = useState("");
    // const [previewImage, setPreviewImage] = useState("");

    // useEffect(() => {
    //     if (!_.isEmpty(dataUpdate)) {
    //         setId(dataUpdate.id);
    //         setEmail(dataUpdate.email);
    //         setUsername(dataUpdate.username);
    //         setRole(dataUpdate.role);
    //         setPassword(dataUpdate.password);
    //     }
    // }, [dataUpdate])


    //Close Modal
    const handleClose = () => {
        setShow(false);
    };

    const handleOnSubmitDeleteUser = () => {
        alert("Delete")
    }

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Xác nhận xóa thông tin user</Modal.Title>
                </Modal.Header>
                <Modal.Body>Bạn có chắc chắn muốn xóa thông tin của user email: <b>{dataUpdate && dataUpdate.email ? dataUpdate.email : ""}</b></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Bỏ qua
                    </Button>
                    <Button variant="primary" onClick={() => handleOnSubmitDeleteUser()}>
                        Xác nhận
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalDeleteUser;