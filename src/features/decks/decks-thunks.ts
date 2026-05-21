import { decksApi } from './decks-api.ts'
import { addDeckAC, setDecksAC } from './decks-reducer.ts'
import { Dispatch } from 'redux'

export const fetchDecksTC = () => {
  return async (dispatch: Dispatch) => {
   try {
     const res = await decksApi.fetchDecks()
     dispatch(setDecksAC(res.data.items))
   } catch (e) {
     console.log(e)
   }
}}

// export const fetchDecksTC = () => (dispatch: Dispatch) => {
//   decksApi.fetchDecks().then(res => {
//     dispatch(setDecksAC(res.data.items))
//   })
// }

export const addDeckTC = (name: string) => {
  return async (dispatch: Dispatch ) => {
    try {
      const res = await decksApi.addDeck(name)
      dispatch(addDeckAC(res.data))
    } catch (e) {
      console.log(e)
    }
  }
}

// export const addDeckTC = (name: string) => (dispatch: Dispatch) => {
//   decksApi.addDeck(name).then((res) => {
//     dispatch(addDeckAC(res.data))
//   })
// }

