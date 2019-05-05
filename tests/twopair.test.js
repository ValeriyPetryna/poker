const {isTwoPairs} = require('../app.js')

describe('Two Pairs', () => {
  describe('No Two Pairs', () => {
    it('Two Pairs is not found', () => {
      const cards = [
      { face: 10, suit: 4 },
      { face: 5, suit: 4 },
      { face: 2, suit: 4 },
      { face: 5, suit: 4 },
      { face: 3, suit: 1 } 
      ]
      expect(isTwoPairs(cards).length).to.equal(0 || 1)
    })
  })
  it('Two Pairs was found', () => {
    const cards = [
    { face: 14, suit: 4 },
    { face: 14, suit: 4 },
    { face: 12, suit: 4 },
    { face: 10, suit: 4 },
    { face: 10, suit: 4 } 
    ]
    expect(isTwoPairs(cards).length).to.equal(2)
  })
})


