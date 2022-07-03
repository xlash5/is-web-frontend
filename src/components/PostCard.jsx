import React, { useState } from 'react';
import Card from './Card';
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import SendIcon from '@mui/icons-material/Send';
import addComment from '../api/addComment';
import useAuth from "../hooks/useAuth";
import CommentCard from './CommentCard';

const PostCard = ({ text, media, date, author, postId, comments, addCommentName }) => {
    const [textField, setTextField] = useState("");
    const { token } = useAuth();

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
        addComment(token, textField, addCommentName, postId).then(() => {
            window.location.reload();
        }).catch((err) => {
            console.log(err);
        }
        )
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
                            <CommentCard
                                author={comment.author}
                                text={comment.text}
                                date={comment.date}
                            />

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
                    label="Post New Comment"
                    multiline
                    rows={4}
                    fullWidth
                    onChange={handleTextChange}
                />
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