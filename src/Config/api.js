import axios from 'axios';

export const libAPI = axios.create({
	baseURL: 'http://intern-12.ap-southeast-1.elasticbeanstalk.com',
});
