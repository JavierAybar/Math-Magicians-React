import calculate from './calculate';
describe('calculate', () => {
  test('when buttonName is AC should return a obj with null values', () => {
    const obj = { total: '7', next: '2', operation: '+' };
    const buttonName = 'AC';
    expect(calculate(obj, buttonName)).toMatchSnapshot();
  });
  test('If there is an operation, update next', () => {
    const obj = { total: '7', next: '2', operation: '+' };
    const buttonName = '1';
    expect(calculate(obj, buttonName)).toMatchSnapshot();
  });
  test('If there is no operation, update next and clear the value', () => {
    const obj = { total: '7', next: '2', operation: null };
    const buttonName = '3';
    expect(calculate(obj, buttonName)).toMatchSnapshot();
  });
  test('when buttonName is . and next already contains ., no change should happen', () => {
    const obj = { total: null, next: '2.3', operation: null };
    const buttonName = '.';
    expect(calculate(obj, buttonName)).toMatchSnapshot();
  });
  test('when buttonName is = and there is a operation, return a obj updated with the total', () => {
    const obj = { total: '9', next: '2', operation: '+' };
    const buttonName = '=';
    expect(calculate(obj, buttonName)).toMatchSnapshot();
  });
  test('when buttonName is = and there is no operation, return a empty obj', () => {
    const obj = { total: null, next: '2', operation: null };
    const buttonName = '=';
    expect(calculate(obj, buttonName)).toMatchSnapshot();
  });
  test('when buttonName is +/- and there is a total value, update total correctly', () => {
    const obj = { total: '7', next: null, operation: null };
    const buttonName = '+/-';
    expect(calculate(obj, buttonName)).toMatchSnapshot();
  });
  test('when buttonName is +/- and there are no values, return empty object', () => {
    const obj = { total: null, next: null, operation: null };
    const buttonName = '+/-';
    expect(calculate(obj, buttonName)).toMatchSnapshot();
  });
});