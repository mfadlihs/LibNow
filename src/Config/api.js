import axios from 'axios';

export const libAPI = axios.create({
	baseURL: 'http://3fdf-202-80-219-182.ngrok.io',
	headers: {
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
		'Content-Type': 'application/json',
	},
});
