var Grid = require('./Grid');

const SUCCESS_BOARD_1 = 1.1;
const FAIL_BOARD_1 = 0.1;
const FAIL_BOARD_2 = 0.2;
const FAIL_BOARD_3 = 0.3;

beforeEach(() => {});

const getBoard = (number) => {
	if ( number == SUCCESS_BOARD_1 ) {
		return [
			[1, 2, 3],
			[4, 5, 6],
			[7, 8, 9],
		];
	}

	if ( number == FAIL_BOARD_1) {
		return [
			[1, 2, 9],
			[4, 5, 6],
			[7, 8, 9],
		];
	}

	if ( number == FAIL_BOARD_2 ) {
		return [
			[1, 2, 3],
			[4, 2, 6],
			[7, 8, 9],
		];
	}

	if ( number == FAIL_BOARD_3 ) {
		return [
			[1, 2, 2],
			[4, 5, 6],
			[7, 8, 9],
		];
	}
}

test('create board with default value', () => {
	const MyGrid = new Grid();

	expect(MyGrid).not.toBeNull()
});

test('create board with define value', () => {
	const MyGrid = new Grid();
	const board = getBoard(SUCCESS_BOARD_1);

	MyGrid.setBoard(board);

	expect(MyGrid.getBoard()).toBe(board)
});

test('create board with define value and test draw', () => {
	const MyGrid = new Grid();
	const board = getBoard(SUCCESS_BOARD_1);

	MyGrid.setBoard(board);

	const expected =
`| 1 | 2 | 3 |
| 4 | 5 | 6 |
| 7 | 8 | 9 |`;

	expect(MyGrid.draw()).toBe(expected)
});

test('create board with define value 1 and check correct dimension', () => {
	const MyGrid = new Grid();
	const board = getBoard(SUCCESS_BOARD_1);

	MyGrid.setBoard(board);

	expect(MyGrid.getDimension()).toBe(3);
});

test('create board with define value 1 and check dimension x equal y', () => {
});

test('create board non-semantic and check dimension, dimension sholud be 0', () => {
});

test('create board with define value 1 and get Row', () => {
	const MyGrid = new Grid();
	MyGrid.setBoard(getBoard(SUCCESS_BOARD_1));

	const expected = [1, 2, 3];
	expect(MyGrid.getRow(0)).toEqual(expected);
});

test('create board with define value 1 and get Column', () => {
	const MyGrid = new Grid();
	MyGrid.setBoard(getBoard(SUCCESS_BOARD_1));

	const expected = [2, 5, 8];

	expect(MyGrid.getColumn(1)).toEqual(expected);
});

test('create fail board with define value 1 and get Column', () => {
	const MyGrid = new Grid();
	MyGrid.setBoard(getBoard(FAIL_BOARD_2));

	const expected = [2, 2, 8];

	expect(MyGrid.getColumn(1)).toEqual(expected);
});

test('validate complete table', () => {
	const MyGrid = new Grid();
	MyGrid.setBoard(getBoard(SUCCESS_BOARD_1));

	expect(MyGrid.validate()).toBeTruthy()
})

test('validate incomplete table 1' , () => {
	const MyGrid = new Grid();
	MyGrid.setBoard(getBoard(FAIL_BOARD_1));

	expect(MyGrid.validate()).toBeFalsy()
})

test('validate incomplete table 2' , () => {
	const MyGrid = new Grid();
	MyGrid.setBoard(getBoard(FAIL_BOARD_2));

	expect(MyGrid.validate()).toBeFalsy()
});

test('validate incomplete table 3' , () => {
	const MyGrid = new Grid();
	MyGrid.setBoard(getBoard(FAIL_BOARD_3));

	expect(MyGrid.validate()).toBeFalsy()
})

test('validate maximun number should not over dimension x dimension' , () => {

})

test('validate number should not have duplicate value' , () => {
    const MyFraudGrid = new Grid().setBoard([
        [4, 1],
        [1 ,2],
    ]);

	expect(MyFraudGrid.validate()).toBeFalsy();
})

test('validate number should not have duplicate value' , () => {
    const MyFraudGrid = new Grid().setBoard([
        [1, 3],
        [1 ,2],
    ]);

	expect(MyFraudGrid.validate()).toBeFalsy();
})

test('validate number should not minus value' , () => {

})


/**************************************** *****************************************/