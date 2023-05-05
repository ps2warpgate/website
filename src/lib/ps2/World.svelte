<script lang="ts">
    import { ProgressRadial } from "@skeletonlabs/skeleton";
    import { getWorld } from "./world";
	import PieChart from "./PieChart.svelte";

    export let world_id: number;

    const world_names = new Map<number, string>([
        [1, 'Connery'],
        [10, 'Miller'],
        [13, 'Cobalt'],
        [17, 'Emerald'],
        [19, 'Jaeger'],
        [40, 'SolTech'],
    ])
    const zones = ['Amerish', 'Esamir', 'Hossin', 'Indar', 'Oshur']

    const alert = true; // For future alert display
</script>

{#await getWorld(world_id)}
<div class="md:flex">
    <section class="card w-full">
        <div class="p-4 space-y-4">
            <div class="placeholder" />
            <div class="grid grid-cols-3 gap-8">
                <div class="placeholder" />
                <div class="placeholder" />
                <div class="placeholder" />
            </div>
            <div class="grid grid-cols-4 gap-4">
                <div class="placeholder" />
                <div class="placeholder" />
                <div class="placeholder" />
                <div class="placeholder" />
            </div>
        </div>
    </section>
</div>
{:then data}
<div class="md:flex justify-center p-4">
    <div class="md:flex-col">
        <h5 class="text-center mb-4">Continents</h5>
        <ol class="list-ol">
            <div class="space-y-4">
                {#each zones as zone}
                    {#if alert === true}
                        <div class="border-2 border-red-600 rounded-2xl lg:w-40">
                            <div class="flow-root">
                                <span class="float-left pl-3">
                                    <dt>{zone}</dt>
                                </span>
                                <div class="flex float-right">
                                    {#if data.continents[zone] === 'open'}
                                        <span class="w-14 badge bg-primary-500">Open</span>
                                    {:else}
                                        <span class="w-14 badge bg-error-500">Closed</span>
                                    {/if}
                                </div>
                            </div>
                        </div>
                    {:else}
                        <div class="border-2 border-surface-600 rounded-2xl lg:w-40">
                            <div class="flow-root">
                                <span class="float-left pl-3">
                                    <dt>{zone}</dt>
                                </span>
                                <div class="flex float-right">
                                    {#if data.continents[zone] === 'open'}
                                        <span class="w-14 badge bg-primary-500">Open</span>
                                    {:else}
                                        <span class="w-14 badge bg-error-500">Closed</span>
                                    {/if}
                                </div>
                            </div>
                        </div>
                    {/if}
                {/each}
            </div>
        </ol>
    </div>
    <div class="invisible md:visible flex-col px-12">
        <span class="divider-vertical h-full" />
    </div>
    <div class="md:flex-col">
        <h5 class="text-center pb-4">Population</h5>
        <div class="flex justify-center pb-4">
            <div class="border-none rounded-2xl">
                <div class="justify-evenly">
                    <div class="flex pb-2">
                        <span class="badge bg-surface-500 rounded-r-2xl">Total: {data.population.total}</span>
                        <span class="badge bg-blue-500 rounded-none">NC: {data.population.nc}</span>
                        <span class="badge bg-red-500 rounded-none">TR: {data.population.tr}</span>
                        <span class="badge bg-purple-500 rounded-l-2xl">VS: {data.population.vs}</span>
                    </div>
                </div>
            </div>
        </div>
        <PieChart world_id={world_id} />
    </div>
</div>
{/await}
