import { combineReducers } from 'redux'
import { CharactersReducer } from './characters'

export const rootReducer = combineReducers({
  characters: CharactersReducer,
})

export type RootState = ReturnType<typeof rootReducer>
