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
//I want to square every element of the array
function traditionalFn(array){
  for (var i = 0; i < array.length; i++) {
    array[i] = array[i]*array[i];
  }
  return array;
}
// console.log(traditionalFn(nums));
//output [4,9,16];

//Here I'll alter all the elements of the animals array to have an approval of true
//Only for animals with a coolFactor of > 6;
//Additionally I want these elements that have coolFactor > 6 to be pushed into a new array
//in this way i can keep the orginal array unaltered
//Still using a traditional for loop

function traditionalApproval(array){
  var newArr = [];
  for (var i = 0; i < array.length; i++) {
    if(array[i].coolFactor > 6){
      array[i].approval = true;
      newArr.push(array[i]);
    }
  }
  return newArr;
}
// console.log(traditionalApproval(animals));

//What if there were a simplers way to accomplish such tasks?
//Enter array methods such as filter and map, we'll get to reduce later!

//in this example, i'm going back to the nums array, and squaring every
//element of that array. These methods return NEW ARRAYS, and leave the original
//unaltered. I'm also incorporating an arrow array as they look very nice with
//these high order functions
function mapNums(array){
  return array.map(e => {
    return e*e;
  })
}
console.log(mapNums(nums));
//output [4,9,16];

//filter function to make a NEW ARRAY containing numbers only greater than 3;
function filterNums(array){
  return array.filter(e => {
    return e > 3;
  })
}
console.log(filterNums(nums));
//output [4];
