import { useState, useEffect } from "react";
import useAuth from "./useAuth";
import api from "../api/api";

export default () => {
    const { token } = useAuth();
    const [userData, setUserData] = useState(null);

    const fetchUserData = () => {
        api.get("/api/v1/user", {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then((res) => {
            setUserData(res.data.result);
        }).catch((err) => {
            console.log(err);
        });
    };

    useEffect(() => {
        if (token) {
            fetchUserData();
        } else {
            console.log("No user from useUserData.js");
        }
    }, [token]);

    return [userData];
};
