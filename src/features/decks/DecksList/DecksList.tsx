import s from './DecksList.module.css'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../app/store.ts'
import { DeckItem } from './DeckItem/DeckItem.tsx'
import { fetchDecksTC } from '../decks-thunks.ts'
import { selectDecks } from '../decks-selectors.ts'

export const DecksList = () => {
  const decks = useAppSelector(selectDecks)

  const dispatch = useAppDispatch()
  useEffect(() => {
    void dispatch(fetchDecksTC())
  }, [dispatch])

  return (
    <ul className={s.list}>
      {decks?.map((deck) => {
        return <DeckItem key={deck.id} deck={deck} />
      })}
    </ul>
  )
}
