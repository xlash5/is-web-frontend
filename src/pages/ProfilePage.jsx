import useUserData from "../hooks/useUserData";
import useAuth from "../hooks/useAuth";
import { useEffect, useState } from "react";
import api from "../api/api";
import getUserByName from "../api/getUserByName";

export default () => {
  const { token } = useAuth();
  const [userData] = useUserData();
  const [userr, setUserr] = useState(null);

  const fetchUserByName = async () => {
    const result = await getUserByName("testuser", token);
    setUserr(result);
  };

  useEffect(() => {
    fetchUserByName()
  }, [])

  return <>
    <h1>
      {userData ? JSON.stringify(userData) : "No user data"}
    </h1>
    <p>
      {userr && JSON.stringify(userr)}
    </p>
  </>;
};
