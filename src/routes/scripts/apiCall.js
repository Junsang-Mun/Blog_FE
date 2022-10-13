import { apiData } from './store.js';

const url = 'http://localhost:3030/api';

export function postPreview() {
	fetch(`${url}/post`)
	.then(response => {
		apiData.set(response);
	})
	.catch(error => {
		console.log(error);
		return ('ERR');
	});
}

export function postDetail(id) {
	fetch(`${url}/post/${id}`)
	.then(response => {
		apiData.set(response);
	})
	.catch(error => {
		console.log(error);
		return ('ERR');
	});
}