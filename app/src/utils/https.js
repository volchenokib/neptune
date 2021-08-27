import axios from "axios";

let service = null;
if (process.env.NODE_ENV === "development") {
	service = axios.create({
		baseURL: "http://localhost:3001/", // <= change this URL
		timeout: 50000
	});
} else {
	service = axios.create({
		baseURL: "/api",
		timeout: 50000
	});
}

// console.log('process.env.BASE_URL',process.env.BASE_URL)
service.interceptors.request.use(
	(config) => {
		return config;
	},
	(error) => {
		console.error("error:", error);
		Promise.reject(error);
	}
);

service.interceptors.response.use(
	(response) => {
		return response;
	},
	(error) => {
		console.error("error:" + error);
		return Promise.reject(error);
	}
);

export default service;
