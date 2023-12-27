<script>
	import { getContext } from 'svelte';
	import { TABS } from './Tabs.svelte';

	const tab = {};
	const { registerTab, selectTab, selectedTab } = getContext(TABS);

	export let selectedStyle;

	registerTab(tab);
</script>

<style>

	.selected {
		border-bottom: 2px solid teal;
		color: #0026ff;
	}
</style>

<button class={$$props.class + ` ${$selectedTab === tab ? selectedStyle : ' ' }`} on:click="{() => {
		selectTab(tab)
	}}">
	<slot></slot>
</button>