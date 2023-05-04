export async function load({ fetch, params }) {
    const response = await fetch(`https://api.wupass.xyz/worlds/?id=${params.id}`)
    const world = await response.json()
    return world
}