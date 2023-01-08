import ModalCreateUser from "./ModalCreateUser";

const ManageUser = () => {
    return (
        <div className="manage-user">
            <div className="manage-user__header">
                Manage User
            </div>
            <div className="manage-user__body">
                <div className="button">
                    {/* <button className="btn btn-primary">Add User</button> */}
                </div>
                <div className="table">
                    <ModalCreateUser></ModalCreateUser>
                </div>
            </div>
        </div>
    );
}

export default ManageUser;
