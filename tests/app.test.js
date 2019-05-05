const {list} = require('../app')

describe('Winner list', () => {
  it('list from app.js should be the same as expected listOfWinners', () => {
      
    const expected = [
      '1. sidrov with combo: Quadro, kicker: 4',
      '2. ivanov1 with combo: Triple, kicker: 2',
      '3. petrov with combo: High Card, kicker: 13',
      '4. ivanov2 with combo: High Card, kicker: 11'
    ]
    for (let i = 0; i < list.length; i++){
      expect(list[i]).to.equal(expected[i])
    }

  })
})