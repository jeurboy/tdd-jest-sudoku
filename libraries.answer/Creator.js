var Grid = require('./Grid');
var SudokuTable = require('./Table');

const boards = [];
/******************
1	3	4	2
4	2	1	3
2	4	3	1
3	1	2	4
/*****************/
boards[0] = [
    [
        [[1, 3], [4, 2]],
        [[4, 2], [1 ,3]],
    ] ,
    [
        [[2 ,4], [3 ,1]],
        [[3 ,1], [2 ,4]],
    ]
]

/******************
4	2	1	3
3	1	2	4
2	4	3	1
1	3	4	2
/*****************/

boards[1] = [
    [
        [[4, 2], [3, 1]],
        [[1, 3], [2 ,4]],
    ] ,
    [
        [[2 ,4], [1 ,3]],
        [[3 ,1], [4 ,2]],
    ]
]

// boards[1] = [
//     [
//         [[4, 0], [0, 1]],
//         [[0, 0], [2 ,0]],
//     ] ,
//     [
//         [[0 ,4], [0 ,0]],
//         [[3 ,0], [0 ,2]],
//     ]
// ]

class Creator {
    createBoard() {
        const boardNumber = this.randBoardNumber();
        const boardArray = boards[boardNumber];

        if (boardArray === undefined) {
            return;
        }

        return this._createBoard(boardArray);
    }

    randBoardNumber() {
        return this._getRandomInt(0, boards.length);
    }

    _createBoard(boardArray) {
        const MyTable = new SudokuTable();

        var rowCount = 0;
        var colCount = 0;

        boardArray.forEach((rowCell) => {
            rowCell.forEach((colCell) => {
                const MyGrid = new Grid();

                MyGrid.setBoard(colCell);

                MyTable.addGrid(rowCount, colCount , MyGrid);

                colCount++
            })

            rowCount++;
        })

        return MyTable;
    }

    _getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);

        //The maximum is exclusive and the minimum is inclusive
        return Math.floor(Math.random() * (max - min)) + min;
    }
}

module.exports = Creator;
