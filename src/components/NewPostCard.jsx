import React from "react";
import Card from "./Card";
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import SendIcon from '@mui/icons-material/Send';
import Palette from "../theme/Palette";
import styled from '@emotion/styled'

const NewPostContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    `

const Row = styled.div` 
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    `
const Input = styled('input')({
    display: 'none',
});

const RedText = styled('p')({
    color: '#ff0000',
    alignSelf: 'center',
    border: '1px solid',
    padding: '10px',
    borderColor: '#ff0000',
});

export default ({ onTextChange, selectImageAction, selectedImage, selectedImageUrl, onPostButtonClick, mediaError, text }) => {
    return (
        <NewPostContainer>
            <Card>
                <h2 style={{ textAlign: 'center' }}>New Post</h2>
                <TextField
                    label="Text"
                    multiline
                    rows={4}
                    fullWidth
                    onChange={onTextChange}
                />

                <Row>
                    <label htmlFor="contained-button-file"
                        style={{
                            marginRight: '10px',
                            alignSelf: 'center',
                        }}>
                        <Input
                            accept="image/jpeg, image/png, image/jpg, video/mp4"
                            id="contained-button-file"
                            type="file"
                            onChange={selectImageAction}
                        />
                        <Button
                            variant="contained"
                            component="span">
                            Select Image or Video
                        </Button>
                    </label>
                    {mediaError ? <RedText>File is too large</RedText> :
                        <p
                            style={{
                                alignSelf: 'center',
                                border: '1px solid',
                                padding: '10px',
                                borderColor: Palette.fourth,
                            }}
                        >
                            {selectedImageUrl ? selectedImage.name : "No media selected"}
                        </p>}
                    <Button
                        disabled={text === ""}
                        variant="contained"
                        onClick={onPostButtonClick}
                        sx={{
                            marginLeft: '10px',
                            alignSelf: 'center',
                        }}
                        endIcon={<SendIcon />}>Post</Button>
                </Row>
            </Card>
        </NewPostContainer>)
}
