import React from 'react';
import Card from './Card';

const PostCard = ({ text, media }) => {
    const checkIfImage = (url) => {
        if (url.includes("jpg") || url.includes("png") || url.includes("jpeg")) {
            return true;
        }
        return false;
    }

    return (
        <Card>
            <p>
                {text}
            </p>
            {media &&
                (checkIfImage(media) ?
                    <img
                        style={{ width: '100%' }}
                        src={media} alt="IMAGE" /> :
                    <video
                        style={{ width: '100%' }}
                        src={media} controls></video>)}
        </Card>
    )
}

export default PostCard