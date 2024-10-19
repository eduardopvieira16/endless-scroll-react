import axios from 'axios';

export const app = axios.create({
    baseURL: 'https://randomuser.me/api/',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});
