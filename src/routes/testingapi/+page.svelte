<script>
	import { onMount } from 'svelte';
	import UIShell from '../components/UIShell.svelte';
	import { postDetail } from '../scripts/apiCall.js';
	//import { apiData } from '../scripts/store.js';
	let data;

	onMount(() => {
		data = postDetail('0c48ff77955a438db0def51ef4767675');
		console.log(data);
	});
</script>

<UIShell currentLocation={["Main", "Test"]}>
	{#await data}
	<p>promise pending...</p>
	{:then datas}
	<p>data.body.body</p>
	{:catch error}
	<p>promise error {error}</p>
	{/await}
</UIShell>