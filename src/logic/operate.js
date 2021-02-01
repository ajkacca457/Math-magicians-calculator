import Big from 'big.js';

const operate = (firstinput, secondinput, operation) => {
  const firstvalue = Big(firstinput);
  const secondvalue = Big(secondinput);
  let outcome;

  switch (operation) {
    case '+':
      outcome = firstvalue.plus(secondvalue);
      break;
    case '-':
      outcome = firstvalue.minus(secondvalue);
      break;
    case 'x':
      outcome = firstvalue.times(secondvalue);
      break;
    case '÷':
      if (secondvalue === '0') {
        outcome = undefined;
      }
      outcome = firstvalue.div(secondvalue);
      break;
    default:
      outcome = firstvalue.times(secondvalue);
  }
  return outcome.toString();
};

export default operate;
