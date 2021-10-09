import { $host } from './index'

export const getCharacters = async (page: number) => {
  const { data } = await $host.get('api/character', { params: { page } })
  return data
}
