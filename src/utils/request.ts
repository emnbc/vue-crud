import axios from 'axios';
import { getToken, logOut } from './auth';

const service = axios.create({
	baseURL: process.env.VUE_APP_API_URL,
	timeout: 10000,
});

service.interceptors.request.use(
	(config) => {
		const token = getToken();
		if (token) {
			config.headers.Authorization = `Bearer ${token}`;
		}
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
			logOut();
		} else {
			// others errors
		}
		return Promise.reject(error);
	},
);

export default service;
