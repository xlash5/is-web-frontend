import React from 'react';
import Palette from '../theme/Palette';

const CommentCard = ({ author, text, date }) => {
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
                    {author}:
                </p>
                <p style={{ fontFamily: 'monospace', fontSize: '1em' }}>
                    {text}
                </p>
            </div>
            <p>{new Date(date).toLocaleString()}</p>
        </div>
    )
}

export default CommentCard;