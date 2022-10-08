<script>
	import "carbon-components-svelte/css/all.css";
	import {
	Header,
	SideNav,
	SideNavItems,
	SideNavLink,
	SkipToContent,
	Content,
	Grid,
	Row,
	Column,
	Theme,
	} from "carbon-components-svelte";

	let isSideNavOpen = false;
</script>

<Header company="IBM" platformName="Carbon Svelte" bind:isSideNavOpen>
	<svelte:fragment slot="skip-to-content">
	<SkipToContent />
	</svelte:fragment>
</Header>

<SideNav bind:isOpen={isSideNavOpen}>
	<Theme
		theme="g10"
	/>
	<SideNavItems>
	<SideNavLink text="Home" />
	<SideNavLink text="Tags" />
	<SideNavLink text="Link 3" />
	</SideNavItems>
</SideNav>

<Content>
	<Grid>
	<Row>
		<Column>
		<slot></slot>
		</Column>
	</Row>
	</Grid>
</Content>
