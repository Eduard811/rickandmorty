import { ICharacter } from '../models/character'

export interface CharactersState {
  characters: Array<ICharacter> | []
  isFetching: boolean
  error: null | string
  page: number
  sortBy: string
}

export enum CharactersActionTypes {
  FETCH_CHARACTERS = 'FETCH_CHARACTERS',
  FETCH_CHARACTERS_SUCCESS = 'FETCH_CHARACTERS_SUCCESS',
  FETCH_CHARACTERS_ERROR = 'FETCH_CHARACTERS_ERROR',
  DELETE_CHARACTER = 'DELETE_CHARACTER',
  ADD_OR_DELETE_FAVORITE = 'ADD_OR_DELETE_FAVORITE',
  SORT_CHARACTERS = 'SORT_CHARACTERS',
}

interface FetchCharacters {
  type: CharactersActionTypes.FETCH_CHARACTERS
}

interface FetchCharactersSuccess {
  type: CharactersActionTypes.FETCH_CHARACTERS_SUCCESS
  payload: Array<ICharacter>
}

interface FetchCharactersError {
  type: CharactersActionTypes.FETCH_CHARACTERS_ERROR
  payload: string
}

interface DeleteCharacter {
  type: CharactersActionTypes.DELETE_CHARACTER
  id: number
}

interface AddOrDeleteFavorite {
  type: CharactersActionTypes.ADD_OR_DELETE_FAVORITE
  id: number
}

interface SortCharacters {
  type: CharactersActionTypes.SORT_CHARACTERS
  payload: string
}

export type CharactersAction =
  | FetchCharacters
  | FetchCharactersSuccess
  | FetchCharactersError
  | DeleteCharacter
  | AddOrDeleteFavorite
  | SortCharacters
