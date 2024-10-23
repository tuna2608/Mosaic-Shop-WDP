import React from 'react';
import "./detailuser.scss";
import AdminNavBar from '../../../components/admin/adminNavbar/AdminNavBar';
import AdminLeftBar from '../../../components/admin/adminLeftBar/AdminLeftBar';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import DateRangeIcon from '@mui/icons-material/DateRange';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import BusinessIcon from '@mui/icons-material/Business';
import { useSelector } from 'react-redux';

function DetailUser() {
    // Get all users from the Redux store
    const users = useSelector((state) => state.users.users);
    // Filter users with validation true
    const validatedUsers = users.filter(user => user.validation);

    const handleAccept = (userID) => {
        console.log(`User ${userID} accepted`);
        // Add any logic you want for accepting the user
    };

    const handleReject = (userID) => {
        console.log(`User ${userID} rejected`);
        // Add any logic you want for rejecting the user
    };

    return (
        <div className='detail-user-container'>
            <AdminNavBar />
            <div className='detail-user-bottom'>
                <AdminLeftBar />
                <div className='bottom-right'>
                    <div className="user-title-container">
                        <h1 className='user-title'>User Management</h1>
                    </div>
                    <div className="user-container">
                        {validatedUsers.map(user => (
                            <div key={user._id} className="user-show">
                                <div className="user-show-top">
                                    <img src={user.img || "https://t4.ftcdn.net/jpg/03/59/58/91/360_F_359589186_JDLl8dIWoBNf1iqEkHxhUeeOulx0wOC5.jpg"} alt="" className="user-show-img" />
                                    <div className="user-show-title">
                                        <span className="user-show-username">{user.username}</span>
                                        <span className="user-show-usertitle">{user.title || "Undefined job"}</span>
                                    </div>
                                </div>
                                <div className="user-show-bottom">
                                    <span className="account-details-title">Account Details</span>
                                    <div className="account-details">
                                        <span className="detail"><PersonOutlineIcon />{user.username}</span>
                                        <span className="detail"><DateRangeIcon />{user.dOB || "mm/dd/yyyy"}</span>
                                    </div>
                                    <span className="account-details-title">Contact details</span>
                                    <div className="account-details">
                                        <span className="detail"><PhoneIcon />{user.phone || "Undefined Phone number"}</span>
                                        <span className="detail"><EmailIcon />{user.email}</span>
                                        <span className="detail"><BusinessIcon />{user.address || "Undefined Address"}</span>
                                    </div>
                                </div>
                                <div className="user-update">
                                    <button onClick={() => handleAccept(user._id)} className="user-update-btn">Accept</button>
                                    <button onClick={() => handleReject(user._id)} className="user-update-btn">Reject</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailUser;
