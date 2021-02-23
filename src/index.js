
exports.min = function min (array) {
  if (!array||array.length === 0) 
    return 0;
  if (array.length === 1)
    return array;
  let minValue = array[0];
  array.forEach(element => {
    minValue = (element < minValue) ? element : minValue ;
  });
  return minValue;
}

exports.max = function max (array) {
  if (!array||array.length === 0) 
    return 0;
  if (array.length === 1)
    return array;
  let maxValue = array[0];
  array.forEach(element => {
    maxValue = (element > maxValue) ? element : maxValue ;
  });
  return maxValue;
}

exports.avg = function avg (array) {
  if (!array||array.length === 0) 
    return 0;
  if (array.length === 1)
    return array;
  let sum = 0;
  array.forEach(element => {
    sum += element;
  });
  return (sum / array.length);
}
