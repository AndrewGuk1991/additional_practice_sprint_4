import axios from 'axios'

export const instance = axios.create({
  baseURL: 'https://api.flashcards.andrii.es',
  headers: {
    'x-auth-skip': true,
  },
})

export const decksApi = {
  fetchDecks() {
    return instance.get<Decks>('/v2/decks')
  },
  addDeck(name: string) {
    return instance.post<Deck>('/v1/decks', {name})
  }
}


export type Deck = {
  id: string
  userId: string
  name: string
  isPrivate: boolean
  cover: string | null
  created: string
  updated: string
  cardsCount: number
  isFavorite: boolean
  author: {
    id: string
    name: string
  }
}

export type Decks = {
  items: Deck[]
  pagination: {
    totalItems: number
    currentPage: number
    itemsPerPage: number
    totalPages: number
  }
}