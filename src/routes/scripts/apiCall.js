import axios from 'axios';
import { apiData } from './store.js';

const url = 'http://localhost:3030/api';

export async function postPreview() {
	const response = await fetch(`${url}/post`);
	const returnValue = await response.json();
	return returnValue;
	//axios.get(`${url}/post`)
	//.then(response => {
	//	console.log(response);
	//	console.log(response.data);
	//	apiData.set(response.data);
	//})
	//.catch(error => {
	//	console.log(error);
	//});
}

export function postDetail(id) {
	axios.get(`${url}/post/${id}`)
	.then(response => {
		apiData.set(response.data);
		console.log(response);
	})
	.catch(error => {
		console.log(error);
	});
}

//export async function postPreview() {
//	try {
//		const response = await axios.get(`${url}/post`);
//		apiData.set(response.data);
//	} catch(err) {
//		console.log(err);
//	}
//}

//export async function postDetail(id) {
//	try {
//		const response = await axios.get(`${url}/post/${id}`);
//		console.log(response);
//		apiData.set(response);
//	} catch(err) {
//		console.log(err);
//	}
//}