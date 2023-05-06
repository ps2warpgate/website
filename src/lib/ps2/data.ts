import type { Ps2World } from './types'

export const getWorlds = async (limit: number) => {
  const response = await fetch('https://api.wupass.xyz/worlds/')
  const data = (await response.json()) as Ps2World[]
  return data.filter((x) => x.id <= limit)
}

export const getWorldById = async (id: number): Promise<Ps2World> => {
  const response = await fetch(
    `https://api.wupass.xyz/worlds/?id=${id}`,
  )
  const data = (await response.json()) as Ps2World
  return data
}