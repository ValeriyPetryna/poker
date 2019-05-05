const {isFullHouse} = require('../app.js')

describe('FullHouse', () => {
    describe('No FullHouse', () => {
        it('FullHouse is not found', () => {
            const cards = [
                { face: 10, suit: 4 },
                { face: 5, suit: 4 },
                { face: 2, suit: 4 },
                { face: 0, suit: 4 },
                { face: 2, suit: 1 } 
            ]
            expect(isFullHouse(cards).length).to.equal(0)
        })
    })
    it('FullHouse was found', () => {
        const cards = [
            { face: 5, suit: 4 },
            { face: 5, suit: 4 },
            { face: 2, suit: 4 },
            { face: 2, suit: 4 },
            { face: 2, suit: 1 } 
        ]
        expect(isFullHouse(cards).length).to.equal(1)
    })
})


