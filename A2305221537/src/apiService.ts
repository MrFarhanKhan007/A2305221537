import axios from 'axios';

const API_URL = 'http://localhost:9876/numbers';
const ACCESS_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzIyMjQyNDI5LCJpYXQiOjE3MjIyNDIxMjksImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImU4OTdmZjhmLTE3OGUtNGE1Ny05NDFlLTNhMDZkODBjYjFmOSIsInN1YiI6ImZhcmhhbi5raGFuM0BzLmFtaXR5LmVkdSJ9LCJjb21wYW55TmFtZSI6IkFmZm9yZE1lZCIsImNsaWVudElEIjoiZTg5N2ZmOGYtMTc4ZS00YTU3LTk0MWUtM2EwNmQ4MGNiMWY5IiwiY2xpZW50U2VjcmV0IjoiQXdodkRwV3dXV3FlbGJTaSIsIm93bmVyTmFtZSI6IkZhcmhhbiIsIm93bmVyRW1haWwiOiJmYXJoYW4ua2hhbjNAcy5hbWl0eS5lZHUiLCJyb2xsTm8iOiJBMjMwNTIyMTUzNyJ9.HtX3vfEOkZ0hhT9DZ7ujI2vKCXh5ef8rv7zfdLHXeWA';

export const fetchNumbers = async (id: string) => {
    try {
        const response = await axios.get(`${API_URL}/${id}`, {
            headers: {
                Authorization: `Bearer ${ACCESS_TOKEN}`
            }
        });
        return response.data;
    } catch (error: any) {
        console.error('Error fetching numbers:', error.response?.data || error.message);
        throw error;
    }
};
