
exports.min = function min (array) {
    if (array == undefined || array.length === 0) {
        return 0;
    }
    if (array === null) {
        return 0;
    }
    function compareNumeric(a, b) {
        if (a > b) return 1;
        if (a == b) return 0;
        if (a < b) return -1;
      }
      array.sort(compareNumeric);
  return array[0];
}

exports.max = function max (array) {
    if (array == undefined || array.length === 0) {
        return 0;
    }
    if (array === null) {
        return 0;
    }
    function compareNumeric(a, b) {
        if (a > b) return 1;
        if (a == b) return 0;
        if (a < b) return -1;
    }
    array.sort(compareNumeric);
  return array[array.length - 1];
}

exports.avg = function avg (array) {
    if (array === undefined || array.length === 0) {
        return 0;
    }
    if (array === null) {
        return 0;
    }
    function compareNumeric(a, b) {
        if (a > b) return 1;
        if (a == b) return 0;
        if (a < b) return -1;
    }
    let result = 0;
    array.sort(compareNumeric);
    for (let i = 0; i < array.length; i++) {
        result = result + array[i];
    }
    return (result / array.length);
}
