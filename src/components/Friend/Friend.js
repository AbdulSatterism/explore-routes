import React from 'react';
import { Link } from 'react-router-dom';
import './Friend.css'

const Friend = ({ friend }) => {
    const { name, email, username, id } = friend
    return (
        <div className='friend'>
            <h3>{name}</h3>
            <p>{email}</p>
            <p><small>userName: <Link to={`/friend/${id}`}>{username}</Link></small></p>
        </div>
    );
};

export default Friend;