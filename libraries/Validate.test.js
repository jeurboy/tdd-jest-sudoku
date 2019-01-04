var Validate = require('./Validate');

test('validate sequence', () => {
    const MyValidate = new Validate();

	expect(MyValidate.result_row([1, 3 ,2 ,4])).toBeTruthy();
	expect(MyValidate.result_row([1, 5 ,2 ,4])).toBeTruthy();
    expect(MyValidate.result_row([4, 5 ,2 ,4])).toBeFalsy();

    expect(MyValidate.result_row([2 ,2 ,4])).toBeFalsy();
})