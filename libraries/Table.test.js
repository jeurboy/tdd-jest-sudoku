var SudokuTable = require('./Table');
var Grid = require('./Grid');

/*
| 1 2 || 3 4 |
| 3 4 || 2 1 |
| 2 1 || 4 3 |
| 4 3 || 1 2 |
*/
const cBoard11 = [
    [1, 2],
    [3, 4],
];
const cBoard12 = [
    [3, 4],
    [2, 1],
];
const cBoard21 = [
    [2, 1],
    [4, 3],
];
const cBoard22 = [
    [4, 3],
    [1, 2],
];

const setCorrectTable = () => {
    const MyTable = new SudokuTable();

	const MyGrid11 = new Grid().setBoard(cBoard11);
	const MyGrid12 = new Grid().setBoard(cBoard12);
	const MyGrid21 = new Grid().setBoard(cBoard21);
    const MyGrid22 = new Grid().setBoard(cBoard22);

    MyTable.addGrid(0, 0 , MyGrid11);
    MyTable.addGrid(0, 1 , MyGrid12);
    MyTable.addGrid(1, 0 , MyGrid21);
    MyTable.addGrid(1, 1 , MyGrid22);

    return MyTable;
}

test('test setup table 2x2 with complete value', () => {
    const MyTable = setCorrectTable();

	expect(MyTable.isCompleteTable()).toBeTruthy();
})

test('test setup table 2x2 with incomplete value', () => {
    const MyTable = setCorrectTable();
    const MyFraudGrid = new Grid().setBoard([
        [1, 2, 3],
        [4 ,5 ,6],
        [4 ,5 ,6],
    ]);

    MyTable.addGrid(1, 1, MyFraudGrid);

	expect(MyTable.isCompleteTable()).toBeFalsy();
})

test('test setup table 2x2 with undefined value', () => {
    const MyTable = setCorrectTable();

    MyTable.addGrid(1, 1, undefined);

	expect(MyTable.isCompleteTable()).toBeFalsy();
})

test('test setup table 2x2 with incorrect value and get all row', () => {
    const MyTable = setCorrectTable();
    const expected_00 = [[1, 2] , [3, 4]];
    const expected_01 = [[3, 4] , [2, 1]];
    const expected_11 = [[4, 3] , [1, 2]];

	expect(MyTable.getAllRows(0,0)).toEqual(expected_00);
	expect(MyTable.getAllRows(0,1)).toEqual(expected_01);
	expect(MyTable.getAllRows(1,1)).toEqual(expected_11);
})

test('test setup table 2x2 with incorrect value and get all col', () => {
    const MyTable = setCorrectTable();
    const expected_00 = [[1, 3] , [2, 4]];
    const expected_10 = [[3, 2] , [4, 1]];
    const expected_11 = [[4, 1] , [3, 2]];

	expect(MyTable.getAllCols(0,0)).toEqual(expected_00);
	expect(MyTable.getAllCols(1,0)).toEqual(expected_10);
	expect(MyTable.getAllCols(1,1)).toEqual(expected_11);
})

test('test setup table 2x2 with correct value and validate must be true', () => {
    const MyTable = setCorrectTable();

	expect(MyTable.validate()).toBeTruthy();
})

test('test setup table 2x2 with incorrect value and validate must be false', () => {
    const MyTable = setCorrectTable();

    const MyFraudGrid = new Grid().setBoard([
        [4, 1],
        [1 ,2],
    ]);

    MyTable.addGrid(1, 1, MyFraudGrid);

    expect(MyTable.validate()).toBeFalsy();

    const MyFraudGrid2 = new Grid().setBoard([
        [1, 3],
        [1 ,2],
    ]);

    MyTable.addGrid(1, 1, MyFraudGrid2);

	expect(MyTable.validate()).toBeFalsy();
})
