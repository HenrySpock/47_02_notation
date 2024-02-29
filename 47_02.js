PART ONE 

// 1.
// O(n + 10)
// The 10 can be eliminated because it's a constant:
// O(n)

// 2.
// O(100 * n)
// The 100 can be eliminated because it's a constant:
// O(n) 

// 3.
// O(25)
// The 25 is a constant, and there is no 'n':
// 0(1)  

// 4.
// O(n^2 + n^3)
// In these cases you take the highest order, so n^3 > n^2:
// O(n^3)

// 5.
// O(n + n + n + n)
// This is the same as O(4 * n), and if we then remove the constant of 4 we get:
// O(n)
 
// 6.
// O(1000 * log(n) + n)
// First, we can eliminate the constant 1000. We have log(n) + n remaining. log(n) grows much slower than n as either approach infinity, so:
// O(n)

// 7.
// O(1000 * n * log(n) + n)
// First, we remove the 1000 and get:
// O(n * log(n) + n) or rather O((n * log(n)) + n). We factor out n and get:
// O(n * (log(n) +1))
// We remove the 1 and get:
// O(n * log(n))

// 8.
// O(2^n + n^2)
// Exponential growth far outweighs polynomial growth, so we get:
// O(2^n)

// 9.
// O(5 + 3 + 1)
// 5+3+1 is constant, so we get:
// O(1)

// 10.
// O(n + n^(1/2) + n^2 + n * log(n)^10)
// The additive elements n, n^(1/2) and n^2 can be removed as constants along with the constant power ^10 and we are left with:
// O(n*log(n))

// PART TWO
// Step Two: Calculating Time Complexity
// Determine the time complexities for each of the following functions. If you’re not sure what these functions do, copy and paste them into the console and experiment with different inputs!

// 1.
// function logUpTo(n) {
//   for (let i = 1; i <= n; i++) {
//     console.log(i);
//   }
// }

// A simple loop is O(n).

// 2.
// function logAtLeast10(n) {
//   for (let i = 1; i <= Math.max(n, 10); i++) {
//     console.log(i);
//   }
// }

// Technically the answer would be O(max(n, 10)). If we take the 'worst case scenario approach' (assume n is always larger than 10) we get O(n).A

// 3.
// function logAtMost10(n) {
//   for (let i = 1; i <= Math.min(n, 10); i++) {
//     console.log(i);
//   }
// }

// Technically the answer is O(min(n, 10)). The worst case scenario here is 10, in which case we have O(10) which simplifies to O(1).

// 4.
// function onlyElementsAtEvenIndex(array) {
//   let newArray = [];
//   for (let i = 0; i < array.length; i++) {
//     if (i % 2 === 0) {
//       newArray.push(array[i]);
//     }
//   }
//   return newArray;
// }

// A simple loop is O(n).

// 5.
// function subtotals(array) {
//   let subtotalArray = [];
//   for (let i = 0; i < array.length; i++) {
//     let subtotal = 0;
//     for (let j = 0; j <= i; j++) {
//       subtotal += array[j];
//     }
//     subtotalArray.push(subtotal);
//   }
//   return subtotalArray;
// }

// This is a nested loop, meaning our time complexity becaomes O(n^2).

// 6.
// function vowelCount(str) {
//   let vowelCount = {};
//   const vowels = "aeiouAEIOU";

//   for (let char of str) {
//     if(vowels.includes(char)) {
//       if(char in vowelCount) {
//         vowelCount[char] += 1;
//       } else {
//         vowelCount[char] = 1;
//       }
//     }
//   }

//   return vowelCount;
// }

// Regardless of the variables and conditionals, this is still a simple loop, time complexity is O(n).

// PART THREE
// Answer the following questions:
// 1.
// True or false: n^2 + n is O(n^2).
// True. '+ n' is removed as a ConstantSourceNode.
// 2.
// True or false: n^2 * n is O(n^3).
// True. Multiplying times n again has the affect of cubing the squared n.
// 3.
// True or false: n^2 + n is O(n).
// False. We eliminate the '+ n' as a constant and are left with n^2, not n.
// 4.
// What’s the time complexity of the .indexOf array method?
// .indexOf iterates through each element of a given array, the worst case scenario being that it has to loop through the whole array, so the time complexity is:
// O(n)

// 5.
// What’s the time complexity of the .includes array method?
// Similarly, this method checks each element in an array to see if it 'includes' a given value, the worst case scenario being checking every index, hence:
// O(n)

// 6.
// What’s the time complexity of the .forEach array method?
// Assuming the operation in the callback is simple (not additional loops or adding to time complexity) then again the complexity is:
// O(n)

// 7.
// What’s the time complexity of the .sort array method?
// This depends on the JavaScript engine used by whereever the code is executed. The worst case scenario when quicksort is used would be:
// O(n^2)
// Where as the worst case scenario for mergesort would be:
// O(n log n)


// 8.
// What’s the time complexity of the .unshift array method?
// Unshift requires moving every element, ie linear time, so: 
// O(n)

// 9.
// What’s the time complexity of the .push array method?
// As .push adds an element to the end of an array, the time complexity is constant, so:
//  O(n)

// 10.
// What’s the time complexity of the .splice array method?
// The time complexist of .splice (removing or adding) generally reduces to:
// O(n)


// 11.
// What’s the time complexity of the .pop array method?
// As .pop removes an element from the end of an array, the time complexity is constant:
// O(1)

// 12.
// What’s the time complexity of the Object.keys() function?
// Object.keys iterates over every element in an object and returns an array of any expected elements, thus time complexity is:
// O(n)