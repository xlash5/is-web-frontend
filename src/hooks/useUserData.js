import { useState, useEffect } from "react";
import useAuth from "./useAuth";
import api from "../api/api";

export default () => {
    const { token } = useAuth();
    const [userData, setUserData] = useState(null);
    const [userDataLoading, setUserDataLoading] = useState(true);

    const fetchUserData = () => {
        setUserDataLoading(true);
        api.get("/api/v1/user", {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then((res) => {
            setUserData(res.data.result);
        }).catch((err) => {
            console.log(err);
        }).finally(() => {
            setUserDataLoading(false);
        });
    };

    useEffect(() => {
        if (token) {
            fetchUserData();
        } else {
            console.log("No user from useUserData.js");
        }
    }, [token]);

    return [userData, userDataLoading];
};
