import ModalCreateUser from "./ModalCreateUser";
import "./ManageUser.scss";
import { useState } from "react";

const ManageUser = () => {
    const [showModalCreateUser, setShowModalCreateUser] = useState(false);

    return (
        <div className="manage-user">
            <div className="manage-user__header">
                Manage User
            </div>
            <div className="manage-user__body">
                <div className="button">
                    <button className="btn btn-primary" onClick={() => { setShowModalCreateUser(true) }}>Add User</button>
                </div>
                <div className="table">
                    <ModalCreateUser show={showModalCreateUser} setShow={setShowModalCreateUser}></ModalCreateUser>
                </div>
            </div>
        </div>
    );
}

export default ManageUser;
