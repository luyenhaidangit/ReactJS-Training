import { useState } from "react";
import ModalCreateQuizz from "./ModalCreateQuizz";


const ManageQuizz = (props) => {
    const [showModalCreateUser, setShowModalCreateUser] = useState(false);
    return (
        <div className="manage-quizz">
            <div className="manage-user__header">
                Manage Quizz
            </div>
            <div className="manage-user__body">
                <div className="button">
                    <button className="btn btn-primary" onClick={() => setShowModalCreateUser(true)}>Add Quizz</button>
                </div>
                <div className="table">
                    <ModalCreateQuizz setShow={setShowModalCreateUser} show={showModalCreateUser}></ModalCreateQuizz>
                    {/* <TableUser users={users} handleClickBtnUpdate={handleClickBtnUpdate} handleClickBtnView={handleClickBtnView} handleClickBtnDelete={handleClickBtnDelete}></TableUser> */}
                    {/* <TableUserPanigate currentPage={currentPage} setCurrentPage={setCurrentPage} pageCount={pageCount} fetchUsersWithPanigate={fetchUsersWithPanigate} users={users} handleClickBtnUpdate={handleClickBtnUpdate} handleClickBtnView={handleClickBtnView} handleClickBtnDelete={handleClickBtnDelete}></TableUserPanigate>
                    <ModalCreateUser fetchUsersWithPanigate={fetchUsersWithPanigate} currentPage={currentPage} setCurrentPage={setCurrentPage} show={showModalCreateUser} setShow={setShowModalCreateUser} fetchUsers={fetchUsers}></ModalCreateUser>
                    <ModalUpdateUser fetchUsersWithPanigate={fetchUsersWithPanigate} currentPage={currentPage} setCurrentPage={setCurrentPage} show={showModalUpdateUser} setShow={setShowModalUpdateUser} dataUpdate={dataUpdate} fetchUsers={fetchUsers} setDataUpdate={setDataUpdate}></ModalUpdateUser>
                    <ModalViewUser fetchUsersWithPanigate={fetchUsersWithPanigate} currentPage={currentPage} setCurrentPage={setCurrentPage} show={showModalViewUser} setShow={setShowModalViewUser} dataUpdate={dataUpdate} setDataUpdate={setDataUpdate}></ModalViewUser>
                    <ModalDeleteUser fetchUsersWithPanigate={fetchUsersWithPanigate} currentPage={currentPage} setCurrentPage={setCurrentPage} show={showModalDeleteUser} setShow={setShowModalDeleteUser} dataUpdate={dataUpdate} fetchUsers={fetchUsers}></ModalDeleteUser> */}
                </div>
            </div>
        </div>
    )
}

export default ManageQuizz;