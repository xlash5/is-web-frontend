import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import getDiscoverPeople from '../api/getDiscoverPeople';
import useAuth from '../hooks/useAuth';
import Button from "@mui/material/Button";
import followUser from '../api/followUser';
import { useNavigate } from "react-router-dom";
import getNumberOfFollowers from '../api/getNumberOfFollowers';
import UserCard from '../components/UserCard';

const DiscoverPage = () => {
    const [users, setUsers] = useState([]);
    const { token } = useAuth();
    const navigate = useNavigate();

    const getUsers = async () => {
        const res = await getDiscoverPeople(token);

        setUsers(res);
    }

    useEffect(() => {
        getUsers()
    }, []);

    const followAction = async (username) => {
        await followUser(token, username);
        navigate("/", { replace: true });
    }

    return (
        <div style={{ padding: '10px' }}>
            {users && users.map(user => (
                <UserCard
                    key={user._id}
                    user={user}
                    buttonAction={() => followAction(user.username)}
                    buttonText="Follow" />))}

        </div>
    )
}

export default DiscoverPage;