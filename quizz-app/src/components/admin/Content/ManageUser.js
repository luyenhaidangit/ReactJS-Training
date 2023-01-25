import ModalCreateUser from "./ModalCreateUser";
import "./ManageUser.scss";
import TableUser from "./TableUser";
import { useEffect, useState } from "react";
import { getAllUser } from '../../../services/apiService'

const ManageUser = () => {
    const [showModalCreateUser, setShowModalCreateUser] = useState(false);

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        let res = await getAllUser();
        console.log(res)
        setUsers(res);
    }

    return (
        <div className="manage-user">
            <div className="manage-user__header">
                Manage User
            </div>
            <div className="manage-user__body">
                <div className="button">
                    <button className="btn btn-primary" onClick={() => { setShowModalCreateUser(true) }}>Add User</button>
                    <ModalCreateUser show={showModalCreateUser} setShow={setShowModalCreateUser} fetchUsers={fetchUsers}></ModalCreateUser>
                </div>
                <div className="table">
                    <TableUser users={users}></TableUser>
                </div>
            </div>
        </div>
    );
}

export default ManageUser;
