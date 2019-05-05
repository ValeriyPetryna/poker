const {isFlush} = require('../app.js')

describe('Flush', () => {
  describe('No Flush', () => {
    it('Flush is not found', () => {
      const cards = [
        { face: 10, suit: 4 },
        { face: 5, suit: 4 },
        { face: 2, suit: 4 },
        { face: 2, suit: 4 },
        { face: 2, suit: 1 } 
       ]
       expect(isFlush(cards).length).to.equal(0)
    })
  })
    it('Flush was found', () => {
      const cards = [
        { face: 10, suit: 4 },
        { face: 5, suit: 4 },
        { face: 6, suit: 4 },
        { face: 2, suit: 4 },
        { face: 2, suit: 4 } 
        ]
        expect(isFlush(cards)).to.have.lengthOf(5)
  })
})

