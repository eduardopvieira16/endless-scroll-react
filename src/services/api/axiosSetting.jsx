import axios from 'axios';

export const axiosSetting = axios.create({
    baseURL: 'https://randomuser.me/api/',
    timeout: 1000,
    headers: {
        'Content-Type': 'application/json',
    },
});
