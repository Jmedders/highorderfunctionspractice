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
console.log(traditionalFn(nums));

//Here I'll alter all the elements of the animals array to have an approval of true
//Only for animals with a coolFactor of > 6;
//Additionally I want these elements that have coolFactor > 6 to be pushed into a new array
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
console.log(traditionalApproval(animals));
