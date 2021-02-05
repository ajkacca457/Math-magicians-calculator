import calculate from '../logic/calculate';

describe('Testing cases for calculate.js Module', () => {
  test('`AC` button will clear operation', () => {
    /*eslint-disable */
    const result = calculate({ total: '10', next: '', operation: '' }, 'AC');
    expect(result).toBeUndefined;
    /* eslint-enable */
  });

  test('if the operation is + between two numbers equal sign will subtract them',
    () => {
      const result = calculate({ total: '10', next: '4', operation: '+' }, '=');
      const { total } = result;
      expect(total).toEqual('14');
    });

  test('if the operation is - between two numbers equal sign will subtract them',
    () => {
      const result = calculate({ total: '18', next: '6', operation: '-' }, '=');
      const { total } = result;
      expect(total).toEqual('12');
    });

  test('if the operation is ÷ between two numbers equal sign will divide them',
    () => {
      const result = calculate({ total: '20', next: '5', operation: '÷' }, '=');
      const { total } = result;
      expect(total).toEqual('4');
    });

  test('÷ between two numbers can return decimal value',
    () => {
      const result = calculate({ total: '5', next: '2', operation: '÷' }, '=');
      const { total } = result;
      expect(total).toEqual('2.5');
    });

  test('if the operation is X between two numbers equal sign will multiply them',
    () => {
      const result = calculate({ total: '4', next: '2', operation: 'X' }, '=');
      const { total } = result;
      expect(total).toEqual('8');
    });

  test(' `+/-` button will make a positive number negative', () => {
    const result = calculate({ total: '10', next: '', operation: '' }, '+/-');
    const { total } = result;
    expect(total).toEqual('-10');
  });

  test(' `+/-` button will make a negative number positive', () => {
    const result = calculate({ total: '-10', next: '', operation: '' }, '+/-');
    const { total } = result;
    expect(total).toEqual('10');
  });

  test('`%` button will convert number to percentage', () => {
    const result = calculate({ total: '80', next: '', operation: '' }, '%');
    const { total } = result;
    expect(total).toEqual('0.8');
  });

  test(' `.` button will add decimal point next to number', () => {
    const result = calculate({ total: '10', next: '', operation: '' }, '.');
    const { total } = result;
    expect(total).toEqual('10.');
  });
});
