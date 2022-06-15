import api from './api';

export default async (token, text, media) => {
    try {
        const response = await api.post("/api/v1/createPost",
            {
                text: text,
                media: media
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
            });
        return response.data.result;
    } catch (err) {
        console.log(err);
    }
};