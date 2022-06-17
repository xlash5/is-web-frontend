import api from './api';

export default async (token) => {
    try {
        const response = await api.get("/api/v1/getPosts", {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return response.data.result;
    } catch (err) {
        console.log(err);
    }
};