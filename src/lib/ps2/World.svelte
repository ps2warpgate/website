<script lang="ts">
    export let world_id: number;
    
    async function getWorld(id = world_id) {
		const response = await fetch(`https://wg.wupass.xyz/worlds/?id=${id}`)
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
<div class="flex-auto justify-center">
    <dl class="list-dl px-4 pb-4">
        <h5 class="text-center">Continents</h5>
        <div>
            {#each zones as zone}
                {#if data.continents[zone] === 'open'}
                    <span class="badge bg-primary-500">Open</span>
                {:else}
                    <span class="badge bg-error-500">Closed</span>
                {/if}
                <span class="flex-auto">
                    <dt>{zone}</dt>
                </span>
            {/each}
        </div>
    </dl>
    <hr />
    <h5 class="text-center p-4">Population</h5>
    <div class="justify-center table-container lg:w-3/4">
        <table class="table">
            <thead>
                <tr>
                    <th>Faction</th>
                    <th>Population</th>
                </tr>
            </thead>
            <tbody>
                <tr class="bg-blue-600">
                    <td>NC</td>
                    <td>{data.population.nc}</td>
                </tr>
                <tr class="bg-red-600">
                    <td>TR</td>
                    <td>{data.population.tr}</td>
                </tr>
                <tr class="bg-purple-600">
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
{/await}
