import ModalCreateUser from "./ModalCreateUser";

const ManageUser = () => {
    return (
        <div classNameName="manage-user">
            <div classNameName="manage-user__header">
                Manage User
            </div>
            <div classNameName="manage-user__body">
                <div classNameName="button">
                    <button classNameName="btn btn-primary">Add User</button>
                </div>
                <div classNameName="table">
                    <ModalCreateUser></ModalCreateUser>
                </div>
            </div>
        </div>
    );
}

export default ManageUser;
