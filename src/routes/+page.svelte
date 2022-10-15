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

<UIShell currentLocation={["Main", "ㅁㄴㅇㄹ", "ㅁㄴㅇㄹㅁㄴㅇㄹ", "우하하"]}>
	<h1>Blog Titleeee</h1>
	<!--{#each $apiData as d}
	<p>{d.posts}</p>
	{/each}-->
</UIShell>