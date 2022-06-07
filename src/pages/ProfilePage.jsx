import useUserData from "../hooks/useUserData";
import useAuth from "../hooks/useAuth";
import { useEffect, useState } from "react";
import api from "../api/api";

export default () => {
  const { token } = useAuth();
  const [userData, userDataLoading] = useUserData();
  const [userr, setUserr] = useState(null);

  const fetchUserByName = () => {
    console.log(token);
    api.post("/api/v1/username",
      { username: "testuser" },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      }).then((res) => {
        setUserr(res.data.result);
        console.log(res.data.result);
      }).catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchUserByName()
  }, [])

  return <>
    <h1>
      {userDataLoading ? "No user data" : JSON.stringify(userData)}
    </h1>
    <p>
      {userr && JSON.stringify(userr)}
    </p>
  </>;
};
