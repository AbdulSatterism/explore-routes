import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetails = () => {
    const friendData = useLoaderData();
    const { website, phone, name } = friendData
    return (
        <div>
            <h3>{name}</h3>
            <h5>Phone : {phone}</h5>
            <p>Website : {website}</p>
        </div>
    );
};

export default FriendDetails;