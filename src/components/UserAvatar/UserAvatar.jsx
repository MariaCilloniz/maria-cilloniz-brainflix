import "../UserAvatar/UserAvatar.scss"
import React from 'react'
import Avatar from "../../assets/Images/Mohan-muruge.jpg";

function UserAvatar() {
    return (
        <div className="header__avatar-container">
            <img
                src={Avatar}
                alt="Avatar"
                className="header__avatar"
            />
        </div>
    )
}
export default UserAvatar
