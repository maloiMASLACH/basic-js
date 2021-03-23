module.exports = function transform(arr) {
    let err = Error;
    var newArr = [];
    if (!Array.isArray(arr)) throw err;
    for (let i = 0; i < arr.length; i++) {
      switch (arr[i]) {
        case ('--discard-prev'):
          if (arr[i - 2] !== "--discard-next" && newArr.length != 0) {
            newArr.pop();
          }
          break;
        case ('--discard-next'):
          if (i != arr.length - 1) {
            i++;
          }
          break;
        case ('--double-prev'):
          if (arr[i - 2] !== "--discard-next" && i != 0) {
            newArr.push(arr[i - 1]);
          }
          break;
        case ("--double-next"):
          if (i != arr.length - 1) {
            newArr.push(arr[i + 1]);
          }
          break;
        default:
          newArr.push(arr[i]);
          break;
      }
    }
    return newArr;
  }