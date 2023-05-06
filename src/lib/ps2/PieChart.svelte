<script lang="ts">
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
    export let population: number[];

    ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);
</script>

<Pie data={chartData(world_id, population)} options={options} />

