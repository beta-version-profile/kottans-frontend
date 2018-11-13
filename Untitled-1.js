function dropElements(arr, func) {

  return console.log(arr.filter(item => !func(item)));
}

dropElements([1, 2, 3], function(n) {return n < 3; })