import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import getDiscoverPeople from '../api/getDiscoverPeople';
import useAuth from '../hooks/useAuth';

const DiscoverPage = () => {
    const [users, setUsers] = useState([]);
    const { token } = useAuth();

    const getUsers = async () => {
        const res = await getDiscoverPeople(token);
        setUsers(res);
    }

    useEffect(() => {
        getUsers()
    }, []);

    return (
        <>
            <Card>
                <h1>Discover Page</h1>
                {users && JSON.stringify(users)}
            </Card>
        </>
    )
}

export default DiscoverPage;