<script>
	import UIShell from '../../../components/UIShell.svelte';
	import { onMount } from 'svelte';
	import { postDetail } from '../../../scripts/apiCall.js';
	import { page } from '$app/stores';
	let data;

	onMount(async () => {
		data = await postDetail($page.params.slug);
		console.log(data);
	});
</script>

<UIShell>
	{#if data === 'ERR'}
		<p>ERROR</p>
	{:else if data}
		<h1 style="--orange">{data.metadata.title}</h1>
		<p>{data.metadata.tag}</p>
		{@html data.body.body}
	{:else}
		<p>Loading</p>
	{/if}
</UIShell>