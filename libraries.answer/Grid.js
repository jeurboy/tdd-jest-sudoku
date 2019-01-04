var Validate = require('./Validate');

class Grid {
    constructor() {
        this.board = [];
    }

    setBoard(board) {
        this.board = board;

        return this;
    }

    getBoard() {
        return this.board;
    }

    getRow(row) { return this.board[row]; }

    getColumn(column) {
        var returnColumn = [];

        this.board.forEach((rows) => {
            rows.forEach((col, index) => {
                if (index == column) returnColumn.push(col)
            })
        });

        return returnColumn;
    }

    getDimension() { return this.board.length; }

    validate() {
        const MyValidate = new Validate();

        for (var col = 0; col < this.getDimension(); col++) {
            var testRow = this.getRow(col);
            var testCol = this.getColumn(col);

            if (MyValidate.result_row(testRow) !== true) {
                return false;
            }

            if (MyValidate.result_row(testCol) !== true) {
                return false;
            }
        }

        var testCell = [];

        this.board.forEach((rows) => {
            testCell = testCell.concat(rows);
        })

        if (MyValidate.result_row(testCell) !== true) {
            return false;
        }

        return true;
    }

    draw() {
        var returnDraw = [];

        this.board.forEach((rows) => {
            returnDraw.push('| '+rows.join(' | ')+' |')
        });

        return returnDraw.join("\n");
    }
}

module.exports = Grid;
