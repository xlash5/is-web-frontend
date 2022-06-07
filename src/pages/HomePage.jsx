import React from 'react'
import useLocalStorage from "../hooks/useLocalStorage";
import styled from '@emotion/styled'

const Card = styled.div`
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
    display: inline-block;
    padding: 10px;
    `;

const HomePage = () => {
    const [user, setUser] = useLocalStorage("JWT", null);
    return (
        <>
            <h1>
                {user ? JSON.stringify(user) : "No user"}
            </h1>
            <Card>
                <h1> HOME </h1>
            </Card>
        </>
    )
}

export default HomePage;