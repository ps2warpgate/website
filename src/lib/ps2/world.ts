export async function getWorld(id: number) {
    const response = await fetch(`https://api.wupass.xyz/worlds/?id=${id}`)
    const world = await response.json()
    return world
}