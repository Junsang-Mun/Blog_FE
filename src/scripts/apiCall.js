const url = 'http://localhost:3030/api';

export async function postPreview() {
	try {
		const response = await fetch(`${url}/post`);
		if (!response.ok) {
			return 'ERR';
		}
		const returnValue = await response.json();
		return returnValue;
	} catch(e) {
		if (e) {
			return "ERR";
		}
	}
}

export async function postDetail(id) {
	const response = await fetch(`${url}/post/${id}`);
	if (!response.ok) {
		return 'ERR';
	}
	const returnValue = await response.json();
	return returnValue;
}