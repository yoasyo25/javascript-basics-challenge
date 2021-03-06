function total(arr) {
  var result = 0;
  arr.forEach(function(num) {
    result += num
  })
  return result
};

function mean(arr) {
  var total = 0;
  arr.forEach(function(num) {
    total += num
  })
  return total / arr.length;
};

function median(arr) {
  arr.sort(sortNumbers)
  var middleNum = Math.floor(arr.length / 2);

  if (arr.length % 2 === 0) {
    return (arr[middleNum] + arr[middleNum + 1]) / 2;
  } else {
    return arr[middleNum];
  }
};

function mode(arr) {
  arr.sort(sortNumbers)
  var start = 0, counter = 0, result;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i+1]) {
      counter++;
    } else {
      counter = 0;
    }
    if (counter > start) {
      result = arr[i];
      start = counter;
    }
    return result;
  }
};

function sortNumbers(a,b) {
  return a - b
}

module.exports = { total, mean, median, mode }
