import React, { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { BsPlusLg } from 'react-icons/bs';
import "./ModalCreateUser.scss";
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const ModalCreateUser = (props) => {
    //Props
    const { show, setShow } = props;

    //UseState
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [role, setRole] = useState("user");
    const [image, setImage] = useState("");
    const [previewImage, setPreviewImage] = useState("");

    //Preview Image
    const handlePreviewImage = (event) => {
        if (!event.target.files || event.target.files.length === 0) {
            setImage("")
            setPreviewImage("")
            return;
        }
        console.log(event.target.files[0]);
        // I've kept this example simple by using the first image instead of multiple
        setImage(event.target.files[0].name)
        const objectUrl = URL.createObjectURL(event.target.files[0])
        console.log(image)
        setPreviewImage(objectUrl)
    }

    //Close Modal
    const handleClose = () => {
        setEmail("");
        setPassword("");
        setUsername("");
        setRole("admin");
        setImage("");
        setPreviewImage("");
        setShow(false)
    };

    function validateEmail(email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    //Submit
    const handleOnSubmit = () => {
        const isValidEmail = validateEmail(email);

        if (!isValidEmail) {
            toast.error("Email không hợp lệ!", {
                position: toast.POSITION.TOP_RIGHT
            });
            return;
        }

        if (!password || password.length < 6) {
            toast.error("Mật khẩu không hợp lệ!", {
                position: toast.POSITION.TOP_RIGHT
            });
            return;
        }

        //Data
        let data = {
            email: email,
            password: password,
            username: username,
            role: role,
            image: image,
        }

        //Call API
        axios.post('https://localhost:44396/api/v1/participant/create', data)
            .then(function (response) {
                toast.success("Thêm thông tin thành công");
                handleClose();
            })
            .catch(function (error) {
                console.log("That bai");
            });
    }

    return (
        <>
            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} size="xl" className="modal-create-user">
                <Modal.Header closeButton>
                    <Modal.Title>Add User</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <form className="row g-3">
                        <div className="col-md-6">
                            <label className="form-label">Email</label>
                            <input type="email" className="form-control" value={email} onChange={(event) => { setEmail(event.target.value) }} />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Password</label>
                            <input type="password" className="form-control" value={password} onChange={(event) => { setPassword(event.target.value) }} />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Username</label>
                            <input type="text" className="form-control" value={username} onChange={(event) => { setUsername(event.target.value) }} />
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Role</label>
                            <select className="form-select" value={role} onChange={(event) => { setRole(event.target.value) }}>
                                <option value="user">User</option>
                                <option value="admin">Admin</option>
                            </select>
                        </div>
                        <div className="col-md-12">
                            {/* <label className="form-label me-3">Avatar</label> */}
                            <label variant="warning" className='add-new-user__button btn btn-primary d-inline-flex align-items-center' htmlFor='uploadFileInput'><BsPlusLg></BsPlusLg> Upload Image</label>{' '}
                            <input type="file" id='uploadFileInput' hidden onChange={(event) => handlePreviewImage(event)}></input>
                        </div>
                        <div className="col-md-12 img-preview d-inline-flex justify-content-center align-items-center">
                            {/* <span>Preview Image</span> */}
                            {image && <img src={previewImage} alt="preview-img" />}
                            {/* {image && <img src="../../../assets/img/0a435d1641ddf309b273acd0ef4e0684.jpg" alt="preview-img" />} */}
                            {/* {image && <img src={require('../../../assets/img/' + image)} alt="preview-img" />} */}
                            {/* <img src='https://scontent.fhan8-1.fna.fbcdn.net/v/t39.30808-6/323418857_692851532485714_4452630468141470404_n.jpg?stp=dst-jpg_p843x403&_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=CSYVm_J7daYAX_3bCFl&_nc_ht=scontent.fhan8-1.fna&oh=00_AfDGetiWNr_xj2rTR8Bj_E6Aky1XsnhjLZ1-AfYu9C8wPQ&oe=63BF5E88' style={{ height: "140px", width: "140px" }}></img> */}
                        </div>
                    </form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    {/* <ToastContainer /> */}
                    <Button variant="primary" onClick={() => handleOnSubmit()}>Save</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalCreateUser;