import Sidebar from "./sidebar";
import './admin.scss'
import { FaBars } from 'react-icons/fa';
import React, { useState } from "react";
import { Outlet } from "react-router-dom";

const Admin = () => {
    const [collapsed, setCollapsed] = useState(false);

    //Function

    return (
        <div className="admin d-flex">
            <div className="admin-sidebar">
                <Sidebar collapsed={collapsed}></Sidebar>
            </div>
            <div className="admin-content d-flex flex-column w-100">
                <div className="admin-header">
                    <FaBars onClick={() => { setCollapsed(!collapsed) }}></FaBars>
                </div>
                <div className="admin-body">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    )
}

export default Admin;