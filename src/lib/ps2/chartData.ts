import { getWorld } from "./world";

export async function chartData(id: number) {
    const world = await getWorld(id);
    const data = {
        labels: ['NC', 'TR', 'VS'],
        datasets: [
            {
                label: 'Population',
                data: [world.population.nc, world.population.tr, world.population.vs],
                backgroundColor: [
                    '#143376', // NC dark color
                    '#950C00', // TR dark color
                    '#421280', // VS dark color
                ],
                hoverBackgroundColor: [
                    '#194295', // NC light color
                    '#B90A00', // TR light color
                    '#5F2197', // VS light color
                ],
            }
        ]
    }
    return data
}
export const options = {
    responsive: true,
    plugins: {
        legend: {
            display: false,
        },
    },
};