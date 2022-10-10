<script>
	import { onMount } from 'svelte';
	import { apiData, id, title, tag, preview } from './store.js';
	import UIShell from './UIShell.svelte';

	onMount(async () => {
		fetch("http://localhost:3030/api/post")
		.then(response => {
			response.json();
		})
		.then(data => apiData.set(data))
		.catch(error => {
			console.log(error);
			return [];
		});
	});
</script>

<UIShell currentLocation={["Main"]}>
	<h1>Blog Titleeee</h1>
	<p>{apiData[2]}</p>
</UIShell>