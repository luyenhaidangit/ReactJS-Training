import ModalCreateUser from "./ModalCreateUser";
import "./ManageUser.scss";
import TableUser from "./TableUser";
import { useEffect, useState } from "react";
import { getAllUser } from '../../../services/apiService'
import ModalUpdateUser from "./ModalUpdateUser";
import ModalViewUser from "./ModalViewUser";
import ModalDeleteUser from "./ModalDeleteUser";

const ManageUser = () => {
    const [showModalCreateUser, setShowModalCreateUser] = useState(false);
    const [showModalUpdateUser, setShowModalUpdateUser] = useState(false);
    const [showModalViewUser, setShowModalViewUser] = useState(false);
    const [showModalDeleteUser, setShowModalDeleteUser] = useState(false);
    const [dataUpdate, setDataUpdate] = useState({});

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchUsers();
    }, []);

    const handleClickBtnUpdate = (user) => {
        setShowModalUpdateUser(true);
        setDataUpdate(user);
    }

    const handleClickBtnView = (user) => {
        setShowModalViewUser(true);
        setDataUpdate(user);
    }

    const handleClickBtnDelete = (user) => {
        setShowModalDeleteUser(true);
        setDataUpdate(user);
    }

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
                </div>
                <div className="table">
                    <TableUser users={users} handleClickBtnUpdate={handleClickBtnUpdate} handleClickBtnView={handleClickBtnView} handleClickBtnDelete={handleClickBtnDelete}></TableUser>
                    <ModalCreateUser show={showModalCreateUser} setShow={setShowModalCreateUser} fetchUsers={fetchUsers}></ModalCreateUser>
                    <ModalUpdateUser show={showModalUpdateUser} setShow={setShowModalUpdateUser} dataUpdate={dataUpdate} fetchUsers={fetchUsers} setDataUpdate={setDataUpdate}></ModalUpdateUser>
                    <ModalViewUser show={showModalViewUser} setShow={setShowModalViewUser} dataUpdate={dataUpdate} setDataUpdate={setDataUpdate}></ModalViewUser>
                    <ModalDeleteUser show={showModalDeleteUser} setShow={setShowModalDeleteUser} dataUpdate={dataUpdate} fetchUsers={fetchUsers}></ModalDeleteUser>
                </div>
            </div>
        </div>
    );
}

export default ManageUser;
