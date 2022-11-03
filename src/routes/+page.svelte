<script>
	import 'open-props/style'
	import { onMount } from 'svelte';
	import { postPreview } from '../scripts/apiCall.js';
	let data;
	onMount(async () => {
		data = await postPreview();
		console.log(data);
	});
</script>
<style>
	.test {
		color: var(--orange-8);
	}
	.preview {
		background-color: var(--gray-5);
		margin: var(--size-3);
		padding: var(--size-3);
		border-radius: var(--size-5);
	}
</style>

<h1>악! 음 주코딩이세상에서제일잘돼 해병님!</h1>
{#if data}
	{#each data.posts as post}
		<div class="preview">
			<h2 class="test">{post.title}</h2>
			<p>{post.tag}</p>
			<p>{post.id}</p>
			<a href="/post/{post.id}">go to post: {post.title}</a>
		</div>
	{/each}
{:else}
<p>api 응답 대기 중</p>
{/if}