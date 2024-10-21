import React, { useEffect, useState } from 'react';
import "./userlist.scss";
import AdminNavBar from '../../../components/admin/adminNavbar/AdminNavBar';
import AdminLeftBar from '../../../components/admin/adminLeftBar/AdminLeftBar';
import { DataGrid } from '@mui/x-data-grid';
import { NavLink, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers, updateUser } from '../../../redux/apiCalls';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Bounce, toast } from 'react-toastify';

function UserList() {
    const dispatch = useDispatch();
    const location = useLocation();
    const [notification, setNotification] = useState(location.state);

    useEffect(() => {
        getUsers(dispatch);
    }, [dispatch]);

    const users = useSelector(state => state.users.users) || [];
    
    // Filter users with validation true
    const validatedUsers = users.filter(user => user.validation);

    // Handle Accept
    const handleAccept = (id) => {
        const updatedUser = { validation: false, isShopowner: true }; // Set validation to false and isShopowner to true
        updateUser(id, updatedUser, dispatch);
        setNotification("Updated");
    };

    // Handle Reject
    const handleReject = (id) => {
        const updatedUser = { validation: false }; // Set validation to false
        updateUser(id, updatedUser, dispatch);
        setNotification("Updated");
    };

    // Toast notifications
    useEffect(() => {
        if (notification === "Created") {
            toast.success(`Created User Successfully!`, {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
            setNotification("");
        }
        if (notification === "Updated") {
            toast.success(`User Updated Successfully!`, {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
            setNotification("");
        }
    }, [notification]);

    const columns = [
        { field: '_id', headerName: 'ID', width: 200 },
        {
            field: 'user', headerName: 'Username', width: 200, renderCell: (params) => {
                return (
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <img
                            style={{
                                width: "26px",
                                height: "26px",
                                borderRadius: "50%",
                                objectFit: "cover"
                            }}
                            src={params.row.img || "https://t4.ftcdn.net/jpg/03/59/58/91/360_F_359589186_JDLl8dIWoBNf1iqEkHxhUeeOulx0wOC5.jpg"}
                            alt=""
                        />
                        <p>{params.row.username}</p>
                    </div>
                );
            }
        },
        {
            field: 'email',
            headerName: 'Email',
            type: 'string',
            width: 200,
        },
        {
            field: 'actions',
            headerName: 'Actions',
            width: 200,
            renderCell: (params) => {
                return (
                    <div style={{
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                        gap: "10px"
                    }}>
                        <button
                            style={{
                                border: "none",
                                borderRadius: "10px",
                                padding: "5px 10px",
                                background: "blue",
                                color: "#fff",
                                cursor: "pointer"
                            }}
                            onClick={() => handleAccept(params.row._id)}>
                            Accept
                        </button>
                        <button
                            style={{
                                border: "none",
                                borderRadius: "10px",
                                padding: "5px 10px",
                                background: "orange",
                                color: "#fff",
                                cursor: "pointer"
                            }}
                            onClick={() => handleReject(params.row._id)}>
                            Reject
                        </button>
                    </div>
                );
            }
        },
    ];

    return (
        <div className='user-list-container'>
            <AdminNavBar />
            <div className='user-list-bottom'>
                <AdminLeftBar />
                <div className='bottom-right'>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }} className="user-title-container">
                        <h1>Quản Lí Người Dùng</h1>
                        <NavLink to="/newUser">
                            <button style={{
                                width: "100px",
                                color: "#fff",
                                borderRadius: "5px",
                                backgroundColor: "teal",
                                cursor: "pointer",
                                padding: "10px",
                                fontSize: "16px",
                                display: "flex",
                                alignItems: "center",
                                gap: "10px",
                                border: "none"
                            }} className="user-add-btn">
                                <AddCircleOutlineIcon /><span>Thêm</span>
                            </button>
                        </NavLink>
                    </div>
                    <div style={{ height: '70vh', width: '100%' }}>
                        <DataGrid
                            disableRowSelectionOnClick
                            rows={validatedUsers}
                            columns={columns}
                            getRowId={(row) => row._id}
                            initialState={{
                                pagination: {
                                    paginationModel: { page: 0, pageSize: 5 },
                                },
                            }}
                            pageSizeOptions={[5, 10]}
                            checkboxSelection
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserList;
