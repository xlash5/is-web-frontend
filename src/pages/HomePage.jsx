import React from 'react'
import useLocalStorage from "../hooks/useLocalStorage";
import styled from '@emotion/styled'
import Palette from '../theme/Palette'
import Card from '../components/Card'
import ScreenContainer from '../components/ScreenContainer'
import TextField from '@mui/material/TextField';

const LeftColumn = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
    height: '100%';
    @media (max-width: 768px) {
        width: 100%;
    }
    `
const RightColumn = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;
    height: '100%';
    @media (max-width: 768px) {
        display: none;
    }
    `
const NewPostContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    `

const HomePage = () => {
    const [user, setUser] = useLocalStorage("JWT", null);
    return (
        <>
            <ScreenContainer>
                <LeftColumn>
                    <NewPostContainer>
                        <Card>
                            <h3>New Post</h3>
                            <TextField
                                label="Post"
                                multiline
                                rows={4}
                                fullWidth
                            />
                        </Card>
                    </NewPostContainer>
                    <Card>
                        <h1>Left Column</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Donec euismod, nisl eget consectetur sagittis, nisl
                            nisi consectetur nisi, euismod consectetur nisi
                            nisi euismod.
                        </p>
                    </Card>
                    <Card>
                        <h1>Left Column</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Donec euismod, nisl eget consectetur sagittis, nisl
                            nisi consectetur nisi, euismod consectetur nisi
                            nisi euismod.
                        </p>
                    </Card>
                    <Card>
                        <h1>Left Column</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Donec euismod, nisl eget consectetur sagittis, nisl
                            nisi consectetur nisi, euismod consectetur nisi
                            nisi euismod.
                        </p>
                    </Card>
                </LeftColumn>
                <RightColumn>
                    <Card>
                        <h1>Left Column</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Donec euismod, nisl eget consectetur sagittis, nisl
                            nisi consectetur nisi, euismod consectetur nisi
                            nisi euismod.
                        </p>
                    </Card>
                    <Card>
                        <h1>Left Column</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Donec euismod, nisl eget consectetur sagittis, nisl
                            nisi consectetur nisi, euismod consectetur nisi
                            nisi euismod.
                        </p>
                    </Card>
                </RightColumn>
            </ScreenContainer>

        </>
    )
}

export default HomePage;