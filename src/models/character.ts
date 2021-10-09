export interface ICharacter {
  id: number
  name: string
  status: string
  species: string
  type: string
  gender: string
  oringin: { name: string; url: string }
  location: { name: string; url: string }
  image: string
  episode: Array<string>
  url: string
  created: string
  isFavorite?: boolean
}
