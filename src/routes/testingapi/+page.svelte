<script>
	import { onMount } from 'svelte';
	import { apiData } from '../scripts/store.js';
	import { postDetail } from '../scripts/apiCall.js';
	import UIShell from '../components/UIShell.svelte';

	onMount(() => {
		postDetail('0c48ff77955a438db0def51ef4767675');
		console.log(apiData);
		setTimeout(() => console.log($apiData), 10000);
	});
</script>

<UIShell currentLocation={["Main", "Test"]}>
	{#if $apiData.body !== undefined}
		<p>asjdfasidjfsaldfsdf</p>
		{console.log($apiData.body)}
	{/if}
</UIShell>