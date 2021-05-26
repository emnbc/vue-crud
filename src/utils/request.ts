import axios from 'axios';

// export interface IPageable {
//     size: number;
//     page: number;
//     sort: { column: string, direction: string };
// }

const service = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
    timeout: 100000,
});

service.interceptors.request.use(
    (config) => {
        // if (UserModule.token) {
            config.headers.Authorization = `Bearer `;
        // }
        return config;
    },
    (error) => {
        Promise.reject(error);
    },
);

service.interceptors.response.use(
    (response) => response,
    (error) => {
        console.error(error);
        const status = error.response.status;
        if (status === 401) {
            // if 401 then logout
        } else {
            // others errors
        }
        return Promise.reject(error);
    },
);

export default service;
