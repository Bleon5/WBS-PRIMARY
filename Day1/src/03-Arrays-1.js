const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const stringArray = ["Bleon", "Eni", "Loni"];
console.log(numArray);

// LENGTH
console.log(numArray.length);
console.log(stringArray.length);

// POP VS PUSH -> alter original array

// pop => remove last element
numArray.pop();
console.log(numArray);

// push => insert an element at the end of the list
numArray.push(10);
console.log(numArray);

// SHIFT UNSHIFT => alter original array

// shift => removes first element
numArray.shift();
console.log(numArray);

// unshift => add's an element at the beginning of the array

numArray.unshift(1);
console.log(numArray);

// SLICE VS SPLICE select a range of elements

// slice => doest not alter original array
const slicedArray = numArray.slice(2, 5);
console.log("SlicedArray", slicedArray);
console.log(numArray);

// splice => alters original array
const splicedArray = numArray.splice(2, 5);
console.log("SplicedArray", splicedArray);
console.log(numArray);

// toReversed vs reverse => reverse the array

// toReversed => does not alter original array
const reversedArray = numArray.toReversed();
console.log("Reversed Array", reversedArray);

// reversed => alter original array
numArray.reverse();
console.log(numArray);
