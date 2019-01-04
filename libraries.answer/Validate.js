class Validate {
    result_row(input) {
        input.sort();

        for (var col = 1; col <= input.length; col++) {
            var cur = input[col - 1];
            var next = input[col];

            if (cur === next) {
                return false;
            }
        }

        return true;
    }
}

module.exports = Validate;
