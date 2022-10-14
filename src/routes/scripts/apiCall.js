import { apiData } from './store.js';
import axios from 'axios';

const url = 'http://localhost:3030/api';

export function postPreview() {
	axios.get(`${url}/post`)
	.then(response => {
		console.log(response.data.posts);
		apiData.set(response.data)
		return (response.data)
	})
	.catch(error => {
		console.log(error);
		return ('ERR');
	});
}

export function postDetail(id) {
	axios.get(`${url}/post/${id}`)
	.then(response => {
		apiData.set(response);
		return (response);
	})
	.catch(error => {
		console.log(error);
		return ('ERR');
	});
}