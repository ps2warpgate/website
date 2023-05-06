<script lang="ts">
    import { getWorld } from "./world";
	import PieChart from "./PieChart.svelte";
    import { createQuery } from '@tanstack/svelte-query'
    import { getWorldById } from './data'
    import type { Ps2World } from './types'

    // export let world_id: number;

    const world_names = new Map<number, string>([
        [1, 'Connery'],
        [10, 'Miller'],
        [13, 'Cobalt'],
        [17, 'Emerald'],
        [19, 'Jaeger'],
        [40, 'SolTech'],
    ])
    const zones = ['Amerish', 'Esamir', 'Hossin', 'Indar', 'Oshur']

    export let worldId = 1

    const world = createQuery<Ps2World, Error>({
        queryKey: ['world', worldId],
        queryFn: () => getWorldById(worldId),
    })
</script>

{#if !worldId || $world.isLoading}
<span>Loading...</span>
{/if}
{#if $world.error}
<span>Error: {$world.error.message}</span>
{/if}

{#if $world.isSuccess}
<div class="md:flex justify-center p-4">
    <div class="md:flex-col">
        <h5 class="text-center mb-4">Continents</h5>
        <ol class="list-ol">
            <div class="space-y-4">
                {#each zones as zone}
                    <div class="border-2 border-surface-600 rounded-2xl lg:w-40">
                        <div class="flow-root">
                            <span class="float-left pl-3">
                                <dt>{zone}</dt>
                            </span>
                            <div class="flex float-right">
                                {#if $world.data.continents[zone] === 'open'} <!-- FIX THIS -->
                                    <span class="w-14 badge bg-primary-500">Open</span>
                                {:else}
                                    <span class="w-14 badge bg-error-500">Closed</span>
                                {/if}
                            </div>
                        </div>
                    </div>
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
                        <span class="badge bg-surface-500 rounded-r-2xl">Total: {$world.data.population.total}</span>
                        <span class="badge bg-blue-500 rounded-none">NC: {$world.data.population.nc}</span>
                        <span class="badge bg-red-500 rounded-none">TR: {$world.data.population.tr}</span>
                        <span class="badge bg-purple-500 rounded-l-2xl">VS: {$world.data.population.vs}</span>
                    </div>
                </div>
            </div>
        </div>
        <PieChart world_id={worldId} population={[$world.data.population.nc, $world.data.population.tr, $world.data.population.vs]} />
    </div>
</div>
{/if}

