import api from './api';

export default async (name, token) => {
    try {
        const response = await api.post("/api/v1/username",
            { username: name },
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