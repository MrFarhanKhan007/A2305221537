import axios from 'axios';

const API_URL = 'http://20.244.56.144/test';

const map = [
    {
        id: "e",
        fullname: "even",
    },
    {
        id: "p",
        fullname: "primes",
    },
    {
        id: "r",
        fullname: "rand",
    },

    {
        id: "f",
        fullname: "fibo",
    },

];


export const fetchNumbers = async (id: string) => {
    const mapObject = map.find((m) => {
        return m.id === id
    });

    try {
        const response = await axios.get(`${API_URL}/${mapObject?.fullname}`, {
            method: "GET",
            headers: {
                "content-type": "application/json",
                Authorization: "Bearer " +
                    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzIyMjQ4MzM0LCJpYXQiOjE3MjIyNDgwMzQsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImU4OTdmZjhmLTE3OGUtNGE1Ny05NDFlLTNhMDZkODBjYjFmOSIsInN1YiI6ImZhcmhhbi5raGFuM0BzLmFtaXR5LmVkdSJ9LCJjb21wYW55TmFtZSI6IkFmZm9yZE1lZCIsImNsaWVudElEIjoiZTg5N2ZmOGYtMTc4ZS00YTU3LTk0MWUtM2EwNmQ4MGNiMWY5IiwiY2xpZW50U2VjcmV0IjoiQXdodkRwV3dXV3FlbGJTaSIsIm93bmVyTmFtZSI6IkZhcmhhbiIsIm93bmVyRW1haWwiOiJmYXJoYW4ua2hhbjNAcy5hbWl0eS5lZHUiLCJyb2xsTm8iOiJBMjMwNTIyMTUzNyJ9.wG_BMy4C6xbJD0d0-xcGPH6miHL9EsHmCV-QWRDWr2g",
            }
        });
        return response.data;
    } catch (error: any) {
        console.error('Error fetching numbers:', error.response?.data || error.message);
        throw error;
    }
};
