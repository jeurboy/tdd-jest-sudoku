var Creator = require('./Creator');

test('test random board not exceeds maximun board', () => {
    const MyCreator = new Creator();

    expect(MyCreator.randBoardNumber()).toBeLessThanOrEqual(1);
})

beforeEach(() => {
    jest.restoreAllMocks()
});

test('test create random board', () => {
    const MyCreator = new Creator();
    const MyTable = MyCreator.createBoard();

	expect(MyTable.validate()).toBeTruthy();
})

test('test create random board with mock', () => {
    const MyCreator  = new Creator();
    MyCreator.randBoardNumber = () => 0

    const MyTable = MyCreator.createBoard();

    expect(MyTable.validate()).toBeTruthy();

    jest.spyOn(Creator.prototype, "randBoardNumber");
    jest.restoreAllMocks();
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