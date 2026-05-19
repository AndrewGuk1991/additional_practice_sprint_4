import s from './DecksList.module.css'
import { decksApi } from '../decks-api.ts'
import { useEffect } from 'react'

export const DecksList = () => {

  useEffect(() => {
    decksApi.fetchDecks().then(res => {
      console.log(res.data.items)
    })
  }, [])

  return <ul className={s.list}>

  </ul>
}
