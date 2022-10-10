import { writable, derived } from 'svelte/store';

export const apiData = writable([]);

export const id = derived(apiData, ($apiData) => {
	if ($apiData.id) {
		return $apiData.posts.map(post => post.id);
	} else {
		return [];
	}
});

export const title = derived(apiData, ($apiData) => {
	if ($apiData.title) {
		return $apiData.posts.map(post => post.title);
	} else {
		return [];
	}
});

export const tag = derived(apiData, ($apiData) => {
	if ($apiData.tag) {
		return $apiData.posts.map(post => post.tag);
	} else {
		return [];
	}
});

export const preview = derived(apiData, ($apiData) => {
	if ($apiData.preview) {
		return $apiData.posts.map(post => post.preview);
	} else {
		return [];
	}
});