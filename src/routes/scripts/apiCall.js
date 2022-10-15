import { apiData } from './store.js';
import axios from 'axios';

const url = 'http://localhost:3030/api';

export async function postPreview() {
	try {
		const response = await axios.get(`${url}/post`);
		apiData.set(response.data);
	} catch(err) {
		console.log(err);
	}
}

export async function postDetail(id) {
	try {
		const response = await axios.get(`${url}/post/${id}`);
		apiData.set(response.data);
		return response.data;
	} catch(err) {
		console.log(err);
	}
}