const START = 1
const END = 10

const simpleOne = []
const nestedOne = []
const nestedTwo = []
const deepOne = []
const deepTwo = []
const deepThree = []

// 1. Using a for loop from 1 to 10, add the value of the 'loop index' to the array 'simpleOne'
//    eg [1,2,3...]

for (let i = START; i <= END; i++) {
  simpleOne.push(i)
}

// HINT: in the below loop, the statements and block of code needs to be changed
// HINT: in the below loop, the var i represents the loop index
// for (let i = 5; i < 7; i++) {
// Your code here
// }

// 2. Using nested for loops, add arrays to 'nestedOne' where each array has n copies of the outer 'loop index'
//    eg [[1],[2,2],...]

for (let i = START; i <= END; i++) {
  const nestedArray = []
  for (let j = 0; j < i; j++) {
    nestedArray.push(i)
  }
  nestedOne.push(nestedArray)
}

// 3. As 2, but each array should contain the values from the outer 'loop index' to 1 inclusive. Update array 'nestedTwo'
//    eg [[1],[2,1],...]

for (let i = START; i <= END; i++) {
  const nestedArray = []
  for (let j = i; j >= 1; j--) {
    nestedArray.push(j)
  }
  nestedTwo.push(nestedArray)
}

// 4. As 2, but each array should contain arrays from 1 to the outer 'loop index' with the value of the outer 'loop index'. Update array 'deepOne'
//    eg [[[1]],[[2],[2,2]],...]

for (let i = START; i <= END; i++) {
  const nestedArray = []
  for (let j = 1; j <= i; j++) {
    const secondNestedArray = []
    for (let k = 0; k < j; k++) {
      secondNestedArray.push(i)
    }
    nestedArray.push(secondNestedArray)
  }
  deepOne.push(nestedArray)
}

// 5. As 4, update array 'deepTwo' so that the result is:
//       [[[1]],[[1],[1,2]],...]

for (let i = START; i <= END; i++) {
  const nestedArray = []
  for (let j = 1; j <= i; j++) {
    const secondNestedArray = []
    for (let k = 0; k < j; k++) {
      secondNestedArray.push(k + 1)
    }
    nestedArray.push(secondNestedArray)
  }
  deepTwo.push(nestedArray)
}

console.log(deepTwo)

// 6. As 5, update the array 'deepThree', but the result should be the average of the sum of the squares of the numbers in each array
//       [[1],[[1],[2.5]],...]

for (let i = 0; i < END; i++) {
  // const nestedArray = [];
  deepThree[i] = Array(i + 1)
  for (let j = 0; j <= i; j++) {
    let partialSum = 0
    for (let k = 1; k <= j + 1; k++) {
      partialSum += k ** 2
      deepThree[i][k - 1] = [partialSum / k]
    }
  }
}

module.exports = {
  START,
  END,
  simpleOne,
  nestedOne,
  nestedTwo,
  deepOne,
  deepTwo,
  deepThree
}
