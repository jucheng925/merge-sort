function merge(arr1, arr2) {
  // type your code here

  // MY FIRST ATTEMPT
  // const result = []
  // // note the && will only return true when both conditions are true, so will leave while loop when an array become empty
  // while (arr1.length !== 0 && arr2.length !== 0) {
  //   if (arr1 && arr2) {
  //     if (arr1[0] <= arr2[0]) {
  //       result.unshift(arr1[0])
  //       arr1.splice(0,1)
  //     } else {
  //       result.unshift(arr2[0])
  //       arr2.splice(0,1)
  //     }
  //   } else if (!arr1) {
  //     result.push(arr2)
  //   } else {
  //     result.push(arr1)
  //   }
  // }
  // return result

  // Solution from solutions
  const result = [];

  while (arr1.length && arr2.length) {
    result.push((arr1[0] < arr2[0]) ? arr1.shift() : arr2.shift());
  }

  return [...result, ...arr1, ...arr2];
}

function mergeSort(arr) {
  // type your code here
  if (arr.length < 2){
    return arr
  }
  let middleind = (arr.length % 2 === 0) ? arr.length/2 : (arr.length-1)/2
  const left = mergeSort(arr.slice(0, middleind))
  const right = mergeSort(arr.slice(middleind))
    return merge(left, right)  
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [1, 2]");
  console.log("=>", mergeSort([2, 1]));

  console.log("");

  console.log("Expecting: [1, 2, 3]");
  console.log("=>", mergeSort([1, 2, 3]));

  console.log("");

  console.log("Expecting: [-10, 0, 2, 2, 5, 10, 20]");
  console.log("=>", mergeSort([10, -10, 0, 2, 20, 5, 2]));

  console.log("");

  console.log("Expecting: []");
  console.log("=>", mergeSort([]));

  console.log("");

  console.log("Expecting: [3, 8]");
  console.log("=>", mergeSort([3, 8]));
}

module.exports = mergeSort;

// Please add your pseudocode to this file
// And a written explanation of your solution
