import ReactPaginate from "react-paginate";
// import { useState, useEffect } from "react";

const TableUserPanigate = (props) => {
    const { users, pageCount } = props;

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        console.log(event.selected + 1)
        props.setCurrentPage(event.selected + 1);
        props.fetchUsersWithPanigate(event.selected + 1);
    };


    return (
        <>
            <table className={"table table-hover table-bordered mt-4"}>
                <thead>
                    <tr>
                        <th scope="col">ID</th>
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
                                    <th scope="row">{item.id}</th>
                                    <td>{item.email}</td>
                                    <td>{item.username}</td>
                                    <td>{item.role}</td>
                                    <td>
                                        <button onClick={() => props.handleClickBtnView(item)} type="button" className="btn btn-sm btn-primary">View</button>
                                        <button onClick={() => props.handleClickBtnUpdate(item)} type="button" className="btn btn-sm btn-warning mx-2">Edit</button>
                                        <button onClick={() => props.handleClickBtnDelete(item)} type="button" className="btn btn-sm btn-danger">Delete</button>
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

            <ReactPaginate
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                marginPagesDisplayed={2}
                pageCount={pageCount}
                previousLabel="< previous"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                breakLabel="..."
                breakClassName="page-item"
                breakLinkClassName="page-link"
                containerClassName="pagination"
                activeClassName="active"
                renderOnZeroPageCount={null}
                forcePage={props.currentPage - 1}
            />

            {/* <PaginatedItems itemsPerPage={4} /> */}
        </>
    );
}

export default TableUserPanigate;