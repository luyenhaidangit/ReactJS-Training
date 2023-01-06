import Sidebar from "./sidebar";
import './admin.scss'
import { FaBars } from 'react-icons/fa';
import React, { useState, useEffect } from "react";

const Admin = () => {
    const [collapsed, setCollapsed] = useState(false);

    //Function


    return (
        <div className="admin d-flex">
            <div className="admin-sidebar">
                <Sidebar collapsed={collapsed}></Sidebar>
            </div>
            <div className="admin-content">
                <FaBars onClick={() => { setCollapsed(!collapsed) }}></FaBars>
            </div>
        </div>
    )
}

export default Admin;