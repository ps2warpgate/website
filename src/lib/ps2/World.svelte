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
<div class="md:flex p-4">
    <div class="md:flex-col">
        <ol class="list-ol px-4 pb-4">
            <h5 class="text-center mb-4">Continents</h5>
            <div class="space-y-4">
                {#each zones as zone}
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
                {/each}
            </div>
        </ol>
    </div>
    <div class="md:flex-col">
        <div class="table-container">
            <h5 class="text-center pb-4">Population</h5>
            <div class="justify-center">
                <table class="table lg:flex-grow">
                    <thead>
                        <tr>
                            <th>Faction</th>
                            <th>Population</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>NC</td>
                            <td>{data.population.nc}</td>
                        </tr>
                        <tr>
                            <td>TR</td>
                            <td>{data.population.tr}</td>
                        </tr>
                        <tr>
                            <td>VS</td>
                            <td>{data.population.vs}</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <th colspan="1">Total</th>
                            <td>{data.population.total}</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    </div>
    <div class="md:flex-col">
        <PieChart world_id={world_id} />
    </div>
</div>
{/await}
