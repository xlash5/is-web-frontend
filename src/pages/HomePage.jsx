import React, { useState, useEffect } from 'react'
import useLocalStorage from "../hooks/useLocalStorage";
import styled from '@emotion/styled'
import Palette from '../theme/Palette'
import Card from '../components/Card'
import ScreenContainer from '../components/ScreenContainer'
import NewPostCard from '../components/NewPostCard'

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

const HomePage = () => {
    const [user, setUser] = useLocalStorage("JWT", null);
    const [newPostText, setNewPostText] = useState("");
    const [selectedImage, setSelectedImage] = useState("");
    const [selectedImageUrl, setSelectedImageUrl] = useState("");
    const [mediaError, setMediaError] = useState(false);

    const selectImage = (e) => {
        setSelectedImage(e.target.files[0]);
        if (e.target.files[0].size > 313100) {
            setMediaError(true);
            return
        }
        setMediaError(false);
        var reader = new FileReader();
        reader.onload = function (e) {
            setSelectedImageUrl(e.target.result);
        }
        reader.readAsDataURL(e.target.files[0]);
    }

    return (
        <>
            <ScreenContainer>
                <LeftColumn>
                    <NewPostCard
                        onTextChange={(e) => setNewPostText(e.target.value)}
                        selectImageAction={selectImage}
                        selectedImage={selectedImage}
                        selectedImageUrl={selectedImageUrl}
                        onPostButtonClick={() => {
                            console.log("posting");
                        }}
                        mediaError={mediaError}
                    />
                    <Card>
                        <h1>{newPostText}</h1>
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