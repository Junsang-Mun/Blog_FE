<script>
	import 'open-props/style'
	import { onMount } from 'svelte';
	import { postPreview } from '../scripts/apiCall.js';
	let data;
	onMount(async () => {
		data = await postPreview();
		console.log(data);
	});
	function redirectUrl(url) {
		window.open(`http://localhost:5173/post/${url}`);
	}
</script>

<style>
	.preview {
		background-color: var(--gray-5);
		margin: var(--size-3);
		padding: var(--size-3);
		border-radius: var(--size-5);
	}
</style>

<h1>악! 음 주코딩이세상에서제일잘돼 해병님!</h1>
{#if data === 'ERR'}
	<p>ERROR</p>
{:else if data}
	{#each data.posts as post}
		<div class="preview">
			<h2>{post.title}</h2>
			<p id="tag">{post.tag}</p>
			<p>{post.id}</p>
			<button on:click={redirectUrl(post.id)}>go to post: {post.title}</button>
		</div>
	{/each}
{:else}
<p>api 응답 대기 중</p>
{/if}