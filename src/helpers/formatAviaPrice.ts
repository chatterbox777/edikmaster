export const formatPrice = price => {
  debugger;
  let result;
  let newArr = price.toString().split('');
  switch (newArr.length) {
    case 5:
      newArr.splice(2, 0, ' ');
      result = newArr.join('') + ' ' + 'Р';
      return result;
    case 6:
      newArr.splice(3, 0, ' ');
      result = newArr.join('') + ' ' + 'Р';
      return result;
    default:
      break;
  }
};
