<script>
	export let title;
	export let body;
	export let tag;
	//export let id;
	import { Tag } from 'carbon-components-svelte'
</script>

<h1>${title}</h1>
<div style="margin: 1rem;" />
<!-- 이쪽 body data를 넘어온 id 인자를 통해 PostPreview에서 바로 api단으로 요청할 수 있게 -->
${body}
<div style="margin: 1rem;" />
<Tag>${tag}</Tag>
