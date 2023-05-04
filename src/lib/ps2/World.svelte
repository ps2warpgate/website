<script lang="ts">
    export let world_id: number;
    
    async function getWorld(id = world_id) {
		const response = await fetch(`https://api.wupass.xyz/worlds/?id=${id}`)
		const world = await response.json()
		return world
    }
    let world = getWorld();

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

{#await world then data}
<div class="md:flex p-4">
    <div class="md:flex-col">
        <ol class="list-ol px-4 pb-4">
            <h5 class="text-center mb-4">Continents</h5>
            <div class="space-x-6 space-y-4">
                {#each zones as zone}
                    <div class="lg:flex-col">
                        <div class="inline-flex border-2 border-surface-600 rounded-2xl">
                            <span class="px-3">
                                <dt>{zone}</dt>
                            </span>
                            {#if data.continents[zone] === 'open'}
                                <span class="badge bg-primary-500">Open</span>
                            {:else}
                                <span class="badge bg-error-500">Closed</span>
                            {/if}
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
</div>
{/await}
