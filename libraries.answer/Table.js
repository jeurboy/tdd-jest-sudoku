class Table {
    constructor() {
        this.board = [];
    }

    addGrid (x, y , Grid) {
        if (this.board[x] === undefined) {
            this.board[x] = [];
        }

        this.board[x][y] = Grid;
    }

    isCompleteTable() {
        var dimension = this.board[0][0].getDimension();
        var isCompleteReturn = true;

        this.board.forEach((GridRow) => {
            GridRow.forEach((GridCell) => {
                if (GridCell === undefined) {
                    isCompleteReturn = false;

                    return;
                }

                if (GridCell.getDimension() !== dimension) {
                    isCompleteReturn = false;
                }
            });
        });

        return isCompleteReturn;
    }

    getAllRows(boardNum, boardRow) {
        const rowReturn = [];

        this.board[boardNum].forEach((GridCell) => {
            rowReturn.push(GridCell.getRow(boardRow));
        });

        return rowReturn;
    }

    getAllCols(boardNum, boardCol) {
        const colReturn = [];

        for (var col = 0; col < this.board.length; col++) {
            const boardCell = this.board[col][boardNum]

            colReturn.push(boardCell.getColumn(boardCol));
        }

        return colReturn;
    }

    validate() {
        var isCompleteReturn = true;

        this.board.forEach((GridRow) => {
            GridRow.forEach((GridCell) => {
                if (GridCell.validate() !== true) {
                    isCompleteReturn = false;
                }
            });
        })

        return isCompleteReturn;
    }
}

module.exports = Table;
