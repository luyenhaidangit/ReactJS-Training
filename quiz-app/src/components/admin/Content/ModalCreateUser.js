import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./ModalCreateUser.scss";
import { BsPlusLg } from 'react-icons/bs';

const ModalCreateUser = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [role, setRole] = useState("user");
    const [image, setImage] = useState("");
    const [previewImage, setPreviewImage] = useState("");

    // const handlePreviewImage = (event) => {
    //     console.log('hihi');
    // }

    const handlePreviewImage = (event) => {
        if (!event.target.files || event.target.files.length === 0) {
            setImage("")
            return;
        }

        // I've kept this example simple by using the first image instead of multiple
        setImage(event.target.files[0])
    }

    // create a preview as a side effect, whenever selected file is changed
    useEffect(() => {
        console.log("hii")
        if (!image) {
            setPreviewImage("")
            return;
        }

        const objectUrl = URL.createObjectURL(image)
        console.log(image)
        setPreviewImage(objectUrl)

        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl)
    }, [image])

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Launch static backdrop modal
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                size="xl"
                className="modal-create-user"
            >
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
                            {/* <img src='https://scontent.fhan8-1.fna.fbcdn.net/v/t39.30808-6/323418857_692851532485714_4452630468141470404_n.jpg?stp=dst-jpg_p843x403&_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=CSYVm_J7daYAX_3bCFl&_nc_ht=scontent.fhan8-1.fna&oh=00_AfDGetiWNr_xj2rTR8Bj_E6Aky1XsnhjLZ1-AfYu9C8wPQ&oe=63BF5E88' style={{ height: "140px", width: "140px" }}></img> */}
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary">Save</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalCreateUser;