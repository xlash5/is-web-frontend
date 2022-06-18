import React, { useState, useEffect } from 'react'
import useAuth from '../hooks/useAuth';
import getFollowingPeople from '../api/getFollowingPeople';
import unfollowUser from '../api/unfollowUser';
import { useNavigate } from "react-router-dom";
import UserCard from '../components/UserCard';

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
    <>

      {users && users.map(user => (
        <UserCard
          key={user._id}
          user={user}
          buttonAction={() => unfollowAction(user.username)}
          buttonText="Unfollow" />))}

    </>
  )
}

export default FollowingPage;