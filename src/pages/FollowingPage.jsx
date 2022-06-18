import React, { useState, useEffect } from 'react'
import Card from '../components/Card';
import useAuth from '../hooks/useAuth';
import getFollowingPeople from '../api/getFollowingPeople';
import unfollowUser from '../api/unfollowUser';
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const FollowingPage = () => {
  const [users, setUsers] = useState([]);
  const { token } = useAuth();
  const navigate = useNavigate();

  const getUsers = async () => {
    const res = await getFollowingPeople(token);
    setUsers(res);
  }

  useEffect(() => {
    getUsers()
  }, []);

  const unfollowAction = async (username) => {
    await unfollowUser(token, username);
    navigate("/", { replace: true });
  }

  return (
    //create div with grid layout
    <>

      {users && users.map(user => (
        <Card key={user._id} style={{ padding: '50px', margin: '40px' }}>
          <h1>{user.username}</h1>
          <h2>following: {user.following.length}</h2>
          <Button
            type="button"
            fullWidth
            variant="contained"
            onClick={() => unfollowAction(user.username)}
          >
            Unfollow
          </Button>
        </Card>))}

    </>
  )
}

export default FollowingPage;