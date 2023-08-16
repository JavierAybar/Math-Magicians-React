import operate from './operate';

describe('correct function of operations', () => {
  test('addittion of two numbers', () => {
    expect(operate('1', '3', '+')).toMatchSnapshot();
  });

  test('substraction of two numbers', () => {
    expect(operate('3', '1', '-')).toMatchSnapshot();
  });

  test('multiplication of two numbers', () => {
    expect(operate('10', '2', 'x')).toMatchSnapshot();
  });

  test('division of two numbers', () => {
    expect(operate('12', '3', '÷')).toMatchSnapshot();
  });

  test('division by zero', () => {
    expect(operate('2', '0', '÷')).toMatchSnapshot();
  });

  test('modulo of two numbers', () => {
    expect(operate('10', '3', '%')).toMatchSnapshot();
  });

  test('modulo with divided by zero', () => {
    expect(operate('10', '0', '%')).toMatchSnapshot();
  });
});
