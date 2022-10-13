<script>
	import { onMount } from 'svelte';
	import { postPreview } from './scripts/apiCall.js';
	import { apiData } from './scripts/store.js';
	import UIShell from './components/UIShell.svelte'

	onMount(async () => {
		postPreview();
		console.log(apiData);
	});
</script>

<UIShell currentLocation={["Main"]}>
	<h1>Blog Titleeee</h1>
	<p>{apiData}</p>
</UIShell>