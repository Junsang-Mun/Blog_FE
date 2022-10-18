<script>
	import { onMount } from 'svelte';
	import { postPreview } from './scripts/apiCall.js';
	import UIShell from './components/UIShell.svelte'
	let data;

	onMount(async () => {
		data = await postPreview();
		console.log(data);
	});
</script>

<UIShell currentLocation={["Main"]}>
	<h1>악! 음 주코딩이세상에서제일잘돼 해병님!</h1>
	{#if data}
		{#each data.posts as post}
			<p>{post.title}</p>
			<p>{post.tag}</p>
			<p>{post.id}</p>
			<br>
		{/each}
	{:else}
	<p>api 응답 대기 중</p>
	{/if}
</UIShell>