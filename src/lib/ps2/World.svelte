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
<div class="flex justify-center p-4">
    <dl class="list-dl px-4 pb-4">
        <h5 class="text-center">Continents</h5>
        <div class="flex-wrap flex-grow lg:justify-evenly">
            {#each zones as zone}
                <div class="justify-start">
                    {#if data.continents[zone] === 'open'}
                        <span class="badge bg-primary-500">Open</span>
                    {:else}
                        <span class="badge bg-error-500">Closed</span>
                    {/if}
                    <span class="flex-auto">
                        <dt>{zone}</dt>
                    </span>
                </div>
            {/each}
        </div>
    </dl>
    <div class="table-container">
        <h5 class="text-center pb-4">Population</h5>
        <div class="flex-auto justify-center">
            <table class="table lg:flex-grow mx-auto">
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
{/await}
