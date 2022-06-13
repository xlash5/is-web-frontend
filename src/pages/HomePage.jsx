import React, { useState, useEffect } from 'react'
import useLocalStorage from "../hooks/useLocalStorage";
import styled from '@emotion/styled'
import Palette from '../theme/Palette'
import Card from '../components/Card'
import ScreenContainer from '../components/ScreenContainer'
import NewPostCard from '../components/NewPostCard'
import { firebaseApp } from '../api/firebase';
import { getStorage, ref, getDownloadURL, uploadBytes } from "firebase/storage";
import useUserData from "../hooks/useUserData";

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
    const [newPostText, setNewPostText] = useState("");
    const [selectedImage, setSelectedImage] = useState("");
    const [selectedImageUrl, setSelectedImageUrl] = useState("");
    const [mediaError, setMediaError] = useState(false);
    const [userData] = useUserData();
    const storage = getStorage(firebaseApp, "gs://is-web-ca.appspot.com");
    useEffect
        (() => {
            console.log("userData", userData);
        }
            , [userData]);


    const selectImage = (e) => {
        console.log(e.target.files[0].type);
        setSelectedImage(e.target.files[0]);
        if (e.target.files[0].size > 25000000) {
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

    const handleUploadImage = async () => {
        const storageRef = ref(storage, `/media/${userData._id}/${Math.floor(Math.random() * 1000000)}${Date.now()}${selectedImage.name}`);
        await uploadBytes(storageRef, selectedImage).then((snapshot) => {
            console.log('Uploaded a blob or file!');
        }).then(() => {
            getDownloadURL(storageRef).then((url) => {
                console.log(url);
            });
        });
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
                        onPostButtonClick={handleUploadImage}
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