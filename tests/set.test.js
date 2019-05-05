const {isSet} = require('../app.js')

describe('Set', () => {
  describe('No Set', () => {
    it('Set is not found', () => {
      const cards = [
      { face: 10, suit: 4 },
      { face: 5, suit: 4 },
      { face: 2, suit: 4 },
      { face: 0, suit: 4 },
      { face: 2, suit: 1 } 
      ]
      expect(isSet(cards).length).to.equal(0)
    })
  })
  it('Set was found', () => {
    const cards = [
    { face: 10, suit: 4 },
    { face: 5, suit: 4 },
    { face: 2, suit: 4 },
    { face: 2, suit: 4 },
    { face: 2, suit: 1 } 
    ]
    expect(isSet(cards).length).to.equal(1)
  })
})


