const {isPairs} = require('../app.js')

describe('Pair', () => {
  describe('No pair', () => {
    it('Pair is not found', () => {
      const cards = [
        { face: 10, suit: 4 },
        { face: 5, suit: 4 },
        { face: 2, suit: 4 },
        { face: 2, suit: 4 },
        { face: 2, suit: 1 } 
    ]
        expect(isPairs(cards).length).to.equal(0)
    })
  })
  it('Pair was found', () => {
    const cards = [
    { face: 10, suit: 4 },
    { face: 5, suit: 4 },
    { face: 6, suit: 4 },
    { face: 2, suit: 4 },
    { face: 2, suit: 1 } 
]
    expect(isPairs(cards).length).to.equal(1)
  })
})

