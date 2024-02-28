const CelsiusPf = require('./index')

describe('testa função de celsius para Farenheit', ()=>{
    test('verifica se o celsius é transformado em farenheit', ()=>{
        expect(CelsiusPf(100)).toBe(212)
    })
})