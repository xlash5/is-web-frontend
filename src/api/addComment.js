import api from './api';

export default async (token, text, author, id) => {
    try {
        const response = await api.post("/api/v1/addComment",
            {
                text: text,
                author: author,
                id: id
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