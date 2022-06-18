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
import PostCard from "../components/PostCard";
import useAuth from "../hooks/useAuth";
import createPost from '../api/createPost';
import getPosts from '../api/getPosts';

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
    const { token } = useAuth();
    const [allPosts, setAllPosts] = useState("");

    const storage = getStorage(firebaseApp, "gs://is-web-ca.appspot.com");
    useEffect(() => {
        console.log("userData", userData);
    }
        , [userData]);

    const fetchPosts = async () => {
        const result = await getPosts(token);
        setAllPosts(result);
    }

    useEffect(() => {
        fetchPosts();
    }, [])


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
        if (selectedImage) {
            const storageRef = ref(storage, `/media/${userData._id}/${Math.floor(Math.random() * 1000000)}${Date.now()}${selectedImage.name}`);
            await uploadBytes(storageRef, selectedImage).then((snapshot) => {
                console.log('Uploaded a blob or file!');
            }).then(() => {
                getDownloadURL(storageRef).then((url) => {
                    console.log(url);
                    createPost(token,
                        newPostText,
                        url,
                    ).then(() => {
                        console.log("post created");
                        window.location.reload();
                    }
                    ).catch((err) => {
                        console.log(err);
                    }
                    )
                });
            });
        } else {
            createPost(token,
                newPostText,
                null,
            ).then(() => {
                console.log("post created");
                window.location.reload();
            }
            ).catch((err) => {
                console.log(err);
            }
            )
        }
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
                            {allPosts && JSON.stringify(allPosts)}
                        </p>
                    </Card>
                    {allPosts && allPosts.map((post) => {
                        return <PostCard
                            key={post._id}
                            text={post.text}
                            media={post.media}
                            date={post.date}
                            author={post.author}
                        />
                    })}

                </LeftColumn>
                {/* <RightColumn>
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
                </RightColumn> */}
            </ScreenContainer>

        </>
    )
}

export default HomePage;