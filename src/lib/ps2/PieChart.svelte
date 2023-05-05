<script lang="ts">
    import { ProgressRadial } from '@skeletonlabs/skeleton';
    import { Pie } from 'svelte-chartjs'
    import { chartData } from './chartData';

    export let world_id: number;

    import {
        Chart as ChartJS,
        Title,
        Tooltip,
        Legend,
        ArcElement,
        CategoryScale,
    } from 'chart.js';

    ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);

    let options = {
        responsive: true,
    }
</script>

{#await chartData(world_id)}
    <div class="text-center">Loading...</div>
    <div class="flex justify-center content-center">
        <div class="flex w-10">
            <ProgressRadial stroke={100} meter="stroke-primary-500" track="stroke-primary-500/30" />
        </div>
    </div>
{:then data} 
    <Pie {data} {options} />
{/await}
