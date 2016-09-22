var animals = [
  {type: 'mosquito', coolFactor: 0, approval: false},
  {type: 'jellyfish', coolFactor: 10, approval: false},
  {type: 'butterfly', coolFactor: 8, approval: false}
];

var nums = [2,3,4];

//normal for loops can do high order functions, but methods like map and filter are
//cleaner looking and fun!

//Here's a traditional for loop that squares the elements in the original array
//in this example I return an altered original array
function traditionalFn(array){
  for (var i = 0; i < array.length; i++) {
    array[i] = array[i]*array[i];
  }
  return array;
}
console.log(traditionalfn(nums));
