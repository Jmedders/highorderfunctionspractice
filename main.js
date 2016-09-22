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

//map acts on every element they come into contact with and can alter them
function mapNums(array){
  return array.map(e => {
    return e*e;
  });
}
// console.log(mapNums(nums));
//output [4,9,16];

//filter function to make a NEW ARRAY containing numbers only greater than 3;
//filter returns elements only if they pass a conditional
function filterNums(array){
  return array.filter(e => {
    return e > 3;
  });
}
// console.log(filterNums(nums));
//output [4];

//Those do look pretty nice, but can they take on arrays with nested objects?
//YOU BET!

//in this map, i'll change every animals approval to true;
function mapAnimals(array){
  return array.map(e => {
    e.approval = true;
    return e;
  });
}
// console.log(mapAnimals(animals));

//in this filter i'll return only the animals with coolFactor > 6;

function filterAnimals(array){
  return array.filter(e => {
    return e.coolFactor > 6;
  });
}
// console.log(filterAnimals(animals));

//this is such a clean and easy way to do for loops.
//but it needs to be stated that this can all be done with for loops
//that's essentially what's happening under the hood

//you can also chain these methods!!!

//here i'll recreate the 2nd function seen on this page
function chainAnimals(array){
  return array.filter(e => {
    return e.coolFactor > 6;
  }).map(ele => {
    ele.approval = true;
    return ele
  });
}
console.log(chainAnimals(animals));
