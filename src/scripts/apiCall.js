const url = 'http://localhost:3030/api';

export async function postPreview() {
	const response = await fetch(`${url}/post`);
	if (!response.ok) {
		return 'ERR';
	}
	const returnValue = await response.json();
	return returnValue;
}

export async function postDetail(id) {
	const response = await fetch(`${url}/post/${id}`);
	if (!response.ok) {
		return 'ERR';
	}
	const returnValue = await response.json();
	return returnValue;
}