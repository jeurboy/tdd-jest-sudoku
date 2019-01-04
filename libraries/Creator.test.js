var Creator = require('./Creator');

test('test random board not exceeds maximun board', () => {
    const MyCreator = new Creator();

    expect(MyCreator.randBoardNumber()).toBeLessThanOrEqual(1);
})

beforeEach(() => {
    jest.restoreAllMocks()
});

test('test create random board', () => {
})

test('test create random board with mock', () => {
})

test('test create random board with mock and spy', () => {
    const MyCreator  = new Creator();

    MyCreator._getRandomInt = jest.fn((min, max) => 1)

    const spy = jest.spyOn(MyCreator, '_getRandomInt')

    const MyTable = MyCreator.createBoard();

    expect(spy).toHaveBeenCalled()
})

test('test create random board with out of scope board', () => {
    const MyCreator  = new Creator();

    MyCreator._getRandomInt = jest.fn((min, max) => 100)

    const spy = jest.spyOn(MyCreator, '_getRandomInt')

    const MyTable = MyCreator.createBoard();

    expect(spy).toHaveBeenCalled()
    expect(MyTable).toBeUndefined();
})

test('test create random board with multiple random', () => {
    const MyCreator  = new Creator();

    MyCreator._getRandomInt = jest
        .fn((min, max) => 100)
        .mockImplementationOnce((min, max) => 1)
        .mockImplementationOnce((min, max) => 2)

    expect(MyCreator.randBoardNumber()).toBe(1);
    expect(MyCreator.randBoardNumber()).toBe(2);
    expect(MyCreator.randBoardNumber()).not.toBe(2);
    expect(MyCreator.randBoardNumber()).toBe(100);
})