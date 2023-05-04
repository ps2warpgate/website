export async function load({ fetch, params }) {
    const response = fetch(`https://wg.wupass.xyz/worlds/?id=${params.id}`)
    const world = await response.json()
    return world
}