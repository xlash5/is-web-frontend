import React from 'react';
import Card from './Card';

const PostCard = ({ text, media, date, author }) => {
    const checkIfImage = (url) => {
        if (url.includes("jpg") || url.includes("png") || url.includes("jpeg")) {
            return true;
        }
        return false;
    }

    return (
        <Card>
            <p style={{ fontFamily: 'monospace', fontSize: '2em' }}>
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
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <p style={{ fontFamily: 'monospace', fontSize: '1em' }}>
                    {Date(date)}
                </p>
                <div style={{ width: '50px' }}>

                </div>
                <p style={{ fontFamily: 'monospace', fontSize: '1em' }}>
                    Posted by: {author}
                </p>
            </div>
        </Card>
    )
}

export default PostCard