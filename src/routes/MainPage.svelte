<script>
	// offline 상에서 localhost 통해 접근했을 때 폰트 깨짐 있음.
	import PostPreview from './PostPreview.svelte';
	import { Tile } from 'carbon-components-svelte'
</script>

<h1>Heading 1</h1>
<p>Paragraph</p>
<div style="margin: 1rem;" />
<!-- api call 후 api 응답마다 bind 필요 -->
<Tile>
	<!-- 이거 정상 작동 하나? -->
	<PostPreview />
</Tile>