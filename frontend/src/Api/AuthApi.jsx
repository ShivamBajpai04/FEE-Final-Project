import axios from "axios";

const API_BASE_URL = "fee-final-project-89nf.vercel.app/auth"; // Replace with your actual backend API URL

const axiosConfig = {
	withCredentials: true,
};

const AuthApi = {
	login: async (username, password) => {
		try {
			const response = await axios.post(`${API_BASE_URL}/login`, { username, password }, axiosConfig);
			return response.data;
		} catch (error) {
			throw error.response.data;
		}
	},

	register: async (username, password) => {
		try {
			const response = await axios.post(`${API_BASE_URL}/register`, { username, password }, axiosConfig);
			return response.data;
		} catch (error) {
			throw error.response.data;
		}
	},

	logout: async () => {
		try {
			const response = await axios.post(`${API_BASE_URL}/logout`, {}, axiosConfig);
			return response.data;
		} catch (error) {
			throw error.response.data;
		}
	},

	forgotPassword: async (username) => {
		try {
			const response = await axios.post(`${API_BASE_URL}/forgot-password`, { username }, axiosConfig);
			return response.data;
		} catch (error) {
			throw error.response.data;
		}
	},

	resetPassword: async (token, newPassword) => {
		try {
			const response = await axios.post(`${API_BASE_URL}/reset-password/${token}`, { newPassword }, axiosConfig);
			return response.data;
		} catch (error) {
			throw error.response.data;
		}
	},

	authenticate: async () => {
		try {
			const response = await axios.get(`${API_BASE_URL}/authenticate`, axiosConfig);
			return response.data;
		} catch (error) {
			throw error.response.data;
		}
	},
};

export default AuthApi;
