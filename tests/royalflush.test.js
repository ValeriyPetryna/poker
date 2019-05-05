const {isRoyalFlush} = require('../app.js')

describe('RoyalFlush', () => {
  describe('No RoyalFlush', () => {
    it('RoyalFlush is not found', () => {
      const cards = [
      { face: 10, suit: 4 },
      { face: 5, suit: 4 },
      { face: 2, suit: 4 },
      { face: 0, suit: 4 },
      { face: 2, suit: 1 } 
      ]
      expect(isRoyalFlush(cards).length).to.equal(0)
    })
  })
  it('RoyalFlush was found', () => {
    const cards = [
    { face: 14, suit: 4 },
    { face: 13, suit: 4 },
    { face: 12, suit: 4 },
    { face: 11, suit: 4 },
    { face: 10, suit: 4 } 
    ]
    expect(isRoyalFlush(cards).length).to.equal(1)
  })
})


