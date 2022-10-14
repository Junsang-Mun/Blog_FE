<script>
	import { onMount } from 'svelte';
	import { postPreview } from './scripts/apiCall.js';
	import { apiData } from './scripts/store.js';
	import UIShell from './components/UIShell.svelte'
	let data = 1234;

	onMount(async () => {
		data = postPreview();
	});
</script>

<UIShell currentLocation={["Main"]}>
	<h1>Blog Titleeee</h1>
	<p>{data}</p>
	<p>{apiData}</p>
</UIShell>