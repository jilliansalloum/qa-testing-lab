let myFunctions = require('./functions')

test('return 2 test', () => {
    expect(myFunctions.returnTwo()).toBe(2)
})

describe('check greeting tests', () => {
    test('greeting test', () => {
        expect(myFunctions.greeting('James')).toBe('Hello James.')
    })
    test('greeting test', () => {
        expect(myFunctions.greeting('Jill')).toBe('Hello Jill.')
    })
})

describe('check add tests', () => {
    test('add test', () => {
        expect(myFunctions.add(1,2)).toEqual(3)
    })
    test('add test', () => {
        expect(myFunctions.add(5,9)).toEqual(14)
    })
})

