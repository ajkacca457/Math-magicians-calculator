import operate from '../logic/operate';

const num1 = 30;
const num2 = 6;

test('addition will add two numbers', () => {
  expect(operate(num1, num2, '+')).toEqual('36');
});

test('addition will not subtract number', () => {
  expect(operate(num1, num2, '+')).not.toEqual('24');
});

test('addition will not divide number', () => {
  expect(operate(num1, num2, '+')).not.toEqual('5');
});

test('addition will not multiply number', () => {
  expect(operate(num1, num2, '+')).not.toEqual('180');
});

test('subtraction will subtract two numbers', () => {
  expect(operate(num1, num2, '-')).toEqual('24');
});

test('subtraction will not add two numbers', () => {
  expect(operate(num1, num2, '-')).not.toEqual('36');
});

test('subtraction will not divide number', () => {
  expect(operate(num1, num2, '-')).not.toEqual('5');
});

test('subtraction will not multiply number', () => {
  expect(operate(num1, num2, '-')).not.toEqual('180');
});

test('multiplication will subtract two numbers', () => {
  expect(operate(num1, num2, 'X')).toEqual('180');
});

test('multiplication will not subtract number', () => {
  expect(operate(num1, num2, 'X')).not.toEqual('24');
});

test('multiplication will not add two numbers', () => {
  expect(operate(num1, num2, 'X')).not.toEqual('36');
});

test('multiplication will not divide number', () => {
  expect(operate(num1, num2, 'X')).not.toEqual('5');
});
