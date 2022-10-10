<script>
	export let title;
	export let body;
	export let tag;
	//export let id;
	import { Tag } from 'carbon-components-svelte'
</script>

<h1>${title}</h1>
<div style="margin: 1rem;" />
${body}
<div style="margin: 1rem;" />
<Tag>{tag}</Tag>
