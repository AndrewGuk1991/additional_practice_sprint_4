import { Deck } from './decks-api.ts'

const initialState = {
  decks: [] as Deck[],
  searchParams: {
    name: '',
  },
}

type DecksState = typeof initialState

export const decksReducer = (state: DecksState = initialState, action: DecksActions): DecksState => {
  switch (action.type) {
    case 'SET_DECKS_AC':
      return {...state, decks: action.payload}
    case 'ADD_DECK_AC':
      return {...state, decks: [action.payload, ...state.decks]}
    default:
      return state
  }
}

export const setDecksAC = (payload: Deck[]) => ({
  type: 'SET_DECKS_AC',
  payload,
} as const)

export const addDeckAC = (payload: Deck) => ({
 type: 'ADD_DECK_AC',
  payload,
} as const)

type DecksActions = ReturnType<typeof setDecksAC> | ReturnType<typeof addDeckAC>
