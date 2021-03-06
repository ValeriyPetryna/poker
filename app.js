const allFace = {
  2:2,
  3:3,
  4:4,
  5:5,
  6:6,
  7:7,
  8:8,
  9:9,
  T:10,
  J:11,
  Q:12,
  K:13,
  A:14,
}
const allSuit = {
  S:1,
  D:2,
  C:3,
  H:4,
}

const allCombo = {
  1:'High Card',
  2:'Pair',
  3:'Two Pairs',
  4:'Triple',
  5:'Straight',
  6:'Flush',
  7:'Full House',
  8:'Quadro',
  9:'Straight Flush',
  10:'Royal Flush'
}

const input = [
  { 
    name:'ivanov1',
    cards:['2H','2H','2S','5H','TH']
  },
  { 
    name:'petrov',
    cards:['KS','3S','TS','6S','9H']
  },
  { 
    name:'sidrov',
    cards:['4S','4H','4S','4H','QS']
  },
  { 
    name:'ivanov2',
    cards:['3S','JH','5S','6S','TS']
  }
]

function isHighCard(cards){
  return [cards[0].face]
}

function isPairs(cards){
  const cardOccurences = {}
  let result = []

  cards.some((card) => {
    if (cardOccurences[card.face] != null) {
      cardOccurences[card.face]++
    } else {
      cardOccurences[card.face] = 1
    }
  })
  
  Object.keys(cardOccurences).some((card) => {
    const occurences = cardOccurences[card]
    if (occurences === 2) {
      result.push(Number(card))
    }
  })
  return result
}

function isTwoPairs(cards){
  const cardOccurences = {}
  let result = []
  
  cards.some((card) => {
    if (cardOccurences[card.face] != null) {
      cardOccurences[card.face]++
      if (cardOccurences[card.face] === 2) {
        result.push(card.face)
        if (result.length === 2){
          return true
        }
      }
    } else {
      cardOccurences[card.face] = 1
    }
  })

  return result 
}


function isSet(cards){
  const cardOccurences = {}
  let result = []

  cards.some((card) => {
    if (cardOccurences[card.face] != null) {
      cardOccurences[card.face]++
    } else {
      cardOccurences[card.face] = 1
    }
  })
  
  Object.keys(cardOccurences).some((card) => {
    const occurences = cardOccurences[card]
    if (occurences === 3) {
      result.push(Number(card))
    }
  })
  return result
}

function isStraight(cards){
  let result = true

  for( let i = 0; i < cards.length; i++) {
    if (cards[i].face != cards[0].face-i) {
      result = false
    }
  }
  if (result) {
    return [cards[0].face]
  }
  return []
} 

function isFlush(cards){
  let result = true
    for (let i = 0; i < cards.length; i++) {
      if (cards[0].suit != cards[i].suit) {
        result = false
      }
    } 
  if (result) {
    return cards.map((card) => {
      return card.face
    })
  }
  return []
}

function isFullHouse(cards) {
  const set = isSet(cards)
  const pair = isPairs(cards)
  if (set.length && pair.length) {
    return set
  } 

  return []
}

function isQuadro(cards){
  const cardOccurences = {}
  let result = []
  cards.some((card) => {
    if (cardOccurences[card.face] != null) {
      cardOccurences[card.face]++
    } else {
      cardOccurences[card.face] = 1
    }
  })
  
  Object.keys(cardOccurences).some((card) => {
    const occurences = cardOccurences[card]
    if (occurences === 4) {
      result.push(card)
    }
  })

  return result
}

function isStraightFlush(cards) {
  const straight = isStraight(cards)
  const flush = isFlush(cards)
  if (straight.length && flush.length) {
    return [cards[0].face]
  } 

  return []
}

function isRoyalFlush(cards) {
    const isAce = cards[0].face === allFace['A']
    const straightFlush = isStraightFlush(cards)
    if (isAce && straightFlush.length) {
      return [cards[0].face]
    } 

return []
}


const parsed = input.map((item) => {
  const parsedcards = item.cards.map((card) => {
    const face = card[0]
    const suit = card[1]
      return {
        face: allFace[face],
        suit: allSuit[suit]
      }
  })

  parsedcards.sort((a, b) => {
    return b.face - a.face
  })
  
  let combination
  const highCard = isHighCard(parsedcards)
  const pair = isPairs(parsedcards)
  const doublePair = isTwoPairs(parsedcards)
  const set = isSet(parsedcards)
  const straight = isStraight(parsedcards)
  const flush = isFlush(parsedcards)
  const fullHouse = isFullHouse(parsedcards)
  const quadro = isQuadro(parsedcards)
  const straightFlush = isStraightFlush(parsedcards)
  const royalFlush = isRoyalFlush(parsedcards)

  
  if (royalFlush.length){
    combination = {
      combo: 10,
      kicker: royalFlush
    }
  } else if (straightFlush.length){
    combination = {
      combo: 9,
      kicker: straightFlush
    }
  } else if (quadro.length){
    combination = {
      combo: 8,
      kicker: quadro
    }
  } else if (fullHouse.length) {
    combination = {
      combo: 7,
      kicker: fullHouse
    }
  } else if (flush.length) {
    combination = {
      combo: 6,
      kicker: flush
    }
  } else if (straight.length) {
    combination = {
      combo: 5,
      kicker: straight
    }
  } else if (set.length) {
    combination = {
      combo: 4,
      kicker: set
    }
  } else if (doublePair.length == 2) {
    combination = {
      combo: 3,
      kicker: doublePair
    }
  } else if (pair.length) {
    combination = {
      combo: 2,
      kicker: pair
    }
  } else {
    combination = {
      combo: 1,
      kicker: highCard
    }
  }
  
  return {
    name: item.name,
    cards: item.cards,
    combination: combination
  }
})

parsed.sort((a, b) => {
  if(a.combination.combo === b.combination.combo) {
    for (let i = 0; i < a.combination.kicker.length; i++) {
      if(a.combination.kicker[i] !== b.combination.kicker[i]){
        return b.combination.kicker[i] - a.combination.kicker[i]
      }
    }
  }
  return b.combination.combo - a.combination.combo
})

//console.log(JSON.stringify(parsed,null,3))

let list = []
parsed.forEach(function (item, index) {
  let str = (index + 1 + '. ' + item.name + ' with combo: ' + allCombo[item.combination.combo]+ ', kicker: ' + item.combination.kicker)
  list.push(str)

})

module.exports = {
  isHighCard,
  isPairs,
  isTwoPairs,
  isSet,
  isStraight,
  isFlush,
  isFullHouse,
  isQuadro,
  isStraightFlush,
  isRoyalFlush,
  list
}
