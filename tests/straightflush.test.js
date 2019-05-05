const {isStraightFlush} = require('../app.js')

describe('StraightFlush', () => {
  describe('No StraightFlush', () => {
    it('StraightFlush is not found', () => {
      const cards = [
        { face: 10, suit: 4 },
        { face: 5, suit: 4 },
        { face: 2, suit: 4 },
        { face: 0, suit: 4 },
        { face: 2, suit: 1 } 
      ]
      expect(isStraightFlush(cards).length).to.equal(0)
    })
  })
  it('StraightFlush was found', () => {
    const cards = [
        { face: 10, suit: 4 },
        { face: 9, suit: 4 },
        { face: 8, suit: 4 },
        { face: 7, suit: 4 },
        { face: 6, suit: 4 } 
    ]
    expect(isStraightFlush(cards).length).to.equal(1)
  })
})


