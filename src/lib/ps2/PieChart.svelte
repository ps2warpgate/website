<script lang="ts">
    import { ProgressRadial } from '@skeletonlabs/skeleton';
    import { Pie } from 'svelte-chartjs';
    import { chartData, options } from './chartData';
    import {
        Chart as ChartJS,
        Title,
        Tooltip,
        Legend,
        ArcElement,
        CategoryScale,
    } from 'chart.js';

    export let world_id: number;

    ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);
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
