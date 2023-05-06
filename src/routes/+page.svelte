<script lang="ts">
	import { TabGroup, Tab } from '@skeletonlabs/skeleton';
	import World from '$lib/ps2/World.svelte';

	export let tabSet: number = 1;
</script>

<div class="container mx-auto p-4 lg:p-8 space-y-8 text-center">
	<h1>Warpgate</h1>
	<p>Planetside 2 server stats</p>
	<TabGroup 
		justify="justify-center"
		active="variant-filled-primary"
		hover="hover:variant-soft-primary"
		flex="flex-1 lg:flex-none"
		rounded="rounded-container-token"
		border=""
		class="bg-surface-100-800-token lg:w-full"
	>
		<Tab bind:group={tabSet} name="connery" value={1}>Connery</Tab>
		<Tab bind:group={tabSet} name="miller" value={10}>Miller</Tab>
		<Tab bind:group={tabSet} name="cobalt" value={13}>Cobalt</Tab>
		<Tab bind:group={tabSet} name="emerald" value={17}>Emerald</Tab>
		<Tab bind:group={tabSet} name="jaeger" value={19}>Jaeger</Tab>
		<Tab bind:group={tabSet} name="soltech" value={40}>SolTech</Tab>
		<!-- Tab Panels --->
		<svelte:fragment slot="panel">
			{#if tabSet !== 0}
				{#key tabSet}
					<World worldId={tabSet} />
				{/key}
			{/if}
		</svelte:fragment>
	</TabGroup>
</div>
 