const TableUser = (props) => {
    const { users } = props;



    return (
        <>
            <table className={"table table-hover table-bordered mt-4"}>
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Role</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users && users.length > 0 &&
                        users.map((item, index) => {
                            return (
                                <tr key={`table-user-${index}`}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{item.email}</td>
                                    <td>{item.username}</td>
                                    <td>{item.role}</td>
                                    <td>
                                        <button onClick={() => props.handleClickBtnView(item)} type="button" className="btn btn-sm btn-primary">View</button>
                                        <button onClick={() => props.handleClickBtnUpdate(item)} type="button" className="btn btn-sm btn-warning mx-2">Edit</button>
                                        <button type="button" className="btn btn-sm btn-danger">Update</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                    {
                        users && users.length === 0 &&
                        <tr>
                            <td colSpan={5} className={"text-center"}>Không có bản ghi</td>
                        </tr>
                    }
                </tbody>
            </table>
        </>
    );
}

export default TableUser;