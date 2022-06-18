import React, { useState, useEffect } from 'react'
import Card from '../components/Card';
import useAuth from '../hooks/useAuth';
import getFollowingPeople from '../api/getFollowingPeople';

const FollowingPage = () => {
  const [users, setUsers] = useState([]);
  const { token } = useAuth();

  const getUsers = async () => {
    const res = await getFollowingPeople(token);
    setUsers(res);
  }

  useEffect(() => {
    getUsers()
  }, []);

  return (
    <>
      <Card>
        <h1>Following Page</h1>
        {users && JSON.stringify(users)}
      </Card>
    </>
  )
}

export default FollowingPage;