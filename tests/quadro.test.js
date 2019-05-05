const {isQuadro} = require('../app.js')

describe('Quadro', () => {
  describe('No Quadro', () => {
    it('Quadro is not found', () => {
      const cards = [
        { face: 10, suit: 4 },
        { face: 5, suit: 4 },
        { face: 2, suit: 4 },
        { face: 0, suit: 4 },
        { face: 2, suit: 1 } 
    ]
        expect(isQuadro(cards).length).to.equal(0)
    })
  })
  it('Quadro was found', () => {
    const cards = [
    { face: 10, suit: 4 },
    { face: 2, suit: 4 },
    { face: 2, suit: 4 },
    { face: 2, suit: 4 },
    { face: 2, suit: 1 } 
]
    expect(isQuadro(cards).length).to.equal(1)
  })
})


