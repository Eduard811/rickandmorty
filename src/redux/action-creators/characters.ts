import { Dispatch } from 'redux'
import { getCharacters } from '../../api/character'
import { CharactersAction, CharactersActionTypes } from '../../types/characters'

export const getCharactersAC = (page: number) => async (dispatch: Dispatch<CharactersAction>) => {
  try {
    dispatch({ type: CharactersActionTypes.FETCH_CHARACTERS })
    const { results } = await getCharacters(page)
    dispatch({ type: CharactersActionTypes.FETCH_CHARACTERS_SUCCESS, payload: results })
  } catch (error) {
    dispatch({
      type: CharactersActionTypes.FETCH_CHARACTERS_ERROR,
      payload: 'Произошла ошибка при загрузке Characters.',
    })
  }
}

export const deleteCharacterAC = (id: number) => (dispatch: Dispatch<CharactersAction>) => {
  dispatch({ type: CharactersActionTypes.DELETE_CHARACTER, id })
}

export const AddOrDeleteFavoriteAC = (id: number) => (dispatch: Dispatch<CharactersAction>) => {
  dispatch({ type: CharactersActionTypes.ADD_OR_DELETE_FAVORITE, id })
}

export const sortCharactersAC = (sortBy: string) => (dispatch: Dispatch<CharactersAction>) => {
  dispatch({ type: CharactersActionTypes.SORT_CHARACTERS, payload: sortBy })
}
