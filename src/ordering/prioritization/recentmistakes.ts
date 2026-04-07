import { CardStatus } from '../../cards/cardstatus.js'
import { CardOrganizer } from '../cardorganizer.js'

function newRecentMistakesFirstSorter (): CardOrganizer {
  return {
    reorganize: function (cards: CardStatus[]): CardStatus[] {
      const recentMistakes: CardStatus[] = []
      const others: CardStatus[] = []
      for (const card of cards) {
        const results = card.getResults()
        if (results.length > 0 && !results[results.length - 1]) {
          recentMistakes.push(card)
        } else {
          others.push(card)
        }
      }
      return [...recentMistakes, ...others]
    }
  }
}

export { newRecentMistakesFirstSorter }
