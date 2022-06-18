import api from './api';

export default async (token, username) => {
    try {
        const response = await api.post("/api/v1/follow",
            {
                username: username
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