import React, { useState } from 'react';
import Card from './Card';
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import SendIcon from '@mui/icons-material/Send';
import Palette from '../theme/Palette';

const PostCard = ({ text, media, date, author, postId, comments }) => {
    const [textField, setTextField] = useState("");

    const handleTextChange = (e) => {
        setTextField(e.target.value);
    }

    const checkIfImage = (url) => {
        if (url.includes("jpg") || url.includes("png") || url.includes("jpeg")) {
            return true;
        }
        return false;
    }

    const sendComment = () => {
        console.log(textField);
    }

    return (
        <Card style={{ textAlign: "center" }}>
            <p style={{ fontFamily: 'monospace', fontSize: '2em' }}>
                {text}
            </p>
            {media &&
                (checkIfImage(media) ?
                    <img
                        style={{ maxHeight: '550px', maxWidth: '100%' }}
                        src={media} alt="IMAGE" /> :
                    <video
                        style={{ maxHeight: '550px', maxWidth: '100%' }}
                        src={media} controls></video>)}
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <p style={{ fontFamily: 'monospace', fontSize: '1em' }}>
                    {
                        //timestamp to readable
                        new Date(date).toLocaleString()
                    }
                </p>
                <div style={{ width: '50px' }}>

                </div>
                <p style={{ fontFamily: 'monospace', fontSize: '1em' }}>
                    Posted by: {author}
                </p>
            </div>
            <div>
                {
                    comments && comments.sort((a, b) => {
                        return b.date - a.date;
                    }).map((comment) => {
                        return (
                            <div style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                margin: '10px',
                                border: '1px solid',
                                borderRadius: '5px',
                                padding: '10px',
                                backgroundColor: Palette.first,
                            }}>
                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <p style={{ fontFamily: 'monospace', fontSize: '1em', fontWeight: 'bold' }}>
                                        {comment.author}:
                                    </p>
                                    <p style={{ fontFamily: 'monospace', fontSize: '1em' }}>
                                        {comment.text}
                                    </p>
                                </div>
                                <p>{new Date(comment.date).toLocaleString()}</p>
                            </div>
                        )
                    })
                }

                {
                    comments && (comments.length === 0 &&
                        <p style={{ fontFamily: 'monospace', fontSize: '1em' }}>
                            No comments yet
                        </p>)
                }
                {
                    !comments && <p style={{ fontFamily: 'monospace', fontSize: '1em' }}>
                        No comments yet
                    </p>
                }

            </div>
            <div>
                <TextField
                    label="Text"
                    multiline
                    rows={4}
                    fullWidth
                    onChange={handleTextChange}
                />
                <p>{textField}</p>
                <p>{postId}</p>
                <Button
                    disabled={textField === ""}
                    variant="contained"
                    onClick={sendComment}
                    sx={{
                        marginLeft: '10px',
                        alignSelf: 'center',
                    }}
                    endIcon={<SendIcon />}>Send Comment</Button>
            </div>
        </Card>
    )
}

export default PostCard