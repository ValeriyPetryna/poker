const {isStraight} = require('../app.js')

describe('Straight', () => {
  describe('No Straight', () => {
    it('Straight is not found', () => {
      const cards = [
        { face: 10, suit: 4 },
        { face: 5, suit: 4 },
        { face: 2, suit: 4 },
        { face: 0, suit: 4 },
        { face: 2, suit: 1 } 
      ]
      expect(isStraight(cards).length).to.equal(0)
    })
  })
  it('Straight was found', () => {
    const cards = [
        { face: 10, suit: 4 },
        { face: 9, suit: 4 },
        { face: 8, suit: 4 },
        { face: 7, suit: 4 },
        { face: 6, suit: 1 } 
    ]
    expect(isStraight(cards).length).to.equal(1)
  })
})


