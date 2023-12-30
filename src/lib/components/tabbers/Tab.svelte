<script>
	import { getContext } from 'svelte';
	import { TABS } from './Tabs.svelte';

	const tab = {};
	const { registerTab, selectTab, selectedTab } = getContext(TABS);


	registerTab(tab);
</script>

<style>

	.selected {
		@apply bg-ash-gray-200 text-ash-gray-800;
	}
</style>

<button class:selected={$selectedTab === tab} class="bg-ash-gray-900 px-4 py-[0.35rem] rounded-bl-lg rounded-tr-lg transition-colors duration-300" on:click="{() => {
		selectTab(tab)
	}}">
	<slot></slot>
</button>