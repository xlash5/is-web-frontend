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
const ScreenContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    min-height: 100vh;
    border-width: 0 1px 0 1px;
    border-style: solid;
    border-color: #ffffff40;
    margin: 0 auto;
    padding: 10px 0;
    // tablet viewport
    @media (max-width: 768px) {
        width: 100%;
    }
    `

const HomePage = () => {
    const [user, setUser] = useLocalStorage("JWT", null);
    return (
        <>
            <ScreenContainer>
                <Card>
                    <h1>Welcome {user.username}</h1>
                </Card>
            </ScreenContainer>

        </>
    )
}

export default HomePage;