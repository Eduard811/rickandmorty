import { CharactersState, CharactersActionTypes, CharactersAction } from '../../types/characters'

const initialState: CharactersState = {
  characters: [],
  isFetching: false,
  error: null,
  page: 1,
}

export const CharactersReducer = (state = initialState, action: CharactersAction): CharactersState => {
  switch (action.type) {
    case CharactersActionTypes.FETCH_CHARACTERS:
      return {
        ...state,
        isFetching: true,
      }
    case CharactersActionTypes.FETCH_CHARACTERS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        characters: action.payload.map((character) => {
          character.isFavorite = false
          return character
        }),
      }
    case CharactersActionTypes.FETCH_CHARACTERS_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      }
    case CharactersActionTypes.DELETE_CHARACTER:
      return {
        ...state,
        characters: state.characters.filter((character) => character.id !== action.id),
      }
    case CharactersActionTypes.ADD_OR_DELETE_FAVORITE:
      return {
        ...state,
        characters: state.characters.map((character) => {
          if (character.id === action.id && character.isFavorite) {
            character.isFavorite = false
          } else if (character.id === action.id && !character.isFavorite) {
            character.isFavorite = true
          }

          return character
        }),
      }
    default:
      return state
  }
}
