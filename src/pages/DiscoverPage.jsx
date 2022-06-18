import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import getDiscoverPeople from '../api/getDiscoverPeople';
import useAuth from '../hooks/useAuth';
import Button from "@mui/material/Button";
import followUser from '../api/followUser';
import { useNavigate } from "react-router-dom";

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
        <>
            {users && users.map(user => (
                <Card key={user.id} style={{ padding: '50px', margin: '40px' }}>
                    <h1>{user.username}</h1>
                    <h2>following: {user.following.length}</h2>
                    <Button
                        type="button"
                        fullWidth
                        variant="contained"
                        onClick={() => followAction(user.username)}
                    >
                        Follow
                    </Button>
                </Card>))}

        </>
    )
}

export default DiscoverPage;