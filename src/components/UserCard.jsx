import React, { useState, useEffect } from 'react';
import Card from './Card';
import Button from "@mui/material/Button";
import getNumberOfFollowers from '../api/getNumberOfFollowers';
import useAuth from '../hooks/useAuth';

const hStyle = {
    fontFamily: 'monospace',
    fontSize: '1.5em',
    border: '1px solid black',
    padding: '4px',
    margin: '5px'
}

const UserCard = ({ user, buttonAction, buttonText }) => {
    const { token } = useAuth();
    const [followers, setFollowers] = useState([]);

    const getFollowers = async () => {
        const res = await getNumberOfFollowers(token, user.username);

        setFollowers(res);
    }

    useEffect(() => {
        getFollowers()
    }, []);

    return (
        <Card style={{
            display: 'inline-block',
            textAlign: 'center'

        }}>
            <h1 style={{ fontFamily: 'monospace', fontSize: '2em' }}>{user.username}</h1>
            {/* make this div row space evenly */}
            <div style={{
                display: 'inline-block',
                textAlign: 'center',
                width: '100%'
            }}>
                <h2 style={hStyle}>following: {user.following.length}</h2>
                <h2 style={hStyle}>followers: {followers.length}</h2>
            </div>
            <Button
                type="button"
                variant="contained"
                onClick={buttonAction}
            >
                {buttonText}
            </Button>
        </Card>
    )
}

export default UserCard