// 1-masala

// var singleNumber = function(nums) {
//     let result = [];
//     for (let i = 0; i < nums.length; i++) {
//       if (nums.indexOf(nums[i]) === nums.lastIndexOf(nums[i])) {
//         result.push(nums[i]);
//       }
//     }
//     console.log(result);
//   };
//   singleNumber([4, 1, 2, 1, 2, 9]);
  






// 2-masala

// const search = function(numbers, target) {
//     for (let num of numbers) {
//         if (num === target) {
//             return true;
//         }
//     }
//     return false;
// };
// const numbers = [2, 5, 6, 0, 0, 1, 2];
// const target = 0;
// console.log(search(numbers, target))








// 3-masala

// let arr = [1,1,2,3,3]
// let new_arr = [];
// for (let num of new_arr) {
//     if (!arr.includes(arr)) {
//         new_arr.push(arr);
//     }
// }
// console.log(new_arr)








// 4-masala

// let obj = {name: "Sardor", lang: "English"}

// shallow copy  shallow copy bu obj ni uzgarishlarsz kuchirib oladi. Adresi xam uzgarmaydi
// let new_obj = obj
// new_obj.name = "Shoxjaxon"
// console.log(obj);
// console.log(new_obj);

// deep_copy  2-xil usul bn copy olinadi: 1.spread operation, 2.JSON. spread nested objectlarda ishlamaydi. JSON xammasida ishlaydi

// spread orqali

// let new_obj = {...obj}
// obj.name = "Nurlibek"
// console.log(obj);
// console.log(new_obj);

// let obj = {name: "Sardor", lang: {en: 'English'}}

// let new_obj = JSON.parse(JSON.stringify(obj))
// obj.lang.en = 'Russian'

// console.log(obj);
// console.log(new_obj);










// 5-masala

// const find_num = (array) => {
//   let random = parseInt(Math.random ()* 20)
//   console.log(`${random} ga teng random raqam`)
//   let last_num = array[array.length - 1]
//   let result = random + last_num
//   let num1 = 5
//   let num2 = 6
//   let item = array.lastIndexOf(last_num)
//   if (result % 2 == 0) {
//     array.splice(item, 1, num1)
//   }else {
//     array.splice(item, 1, num2)
//   }
//   return array
// }
// console.log(find_num([4,6,22,11]))







// 6-masala

// function Katta_Farq(nums) {
//     let item = {};
//     let maxNum = null;
//     for (let num of nums) {
//         if (item[num]) {
//             item[num]++;
//         } else {
//             item[num] = 1;
//         }
//     }
//     let maxCount = 0;
//     for (let num in item) {
//         if (item[num] > maxCount) {
//             maxCount = item[num];
//             maxNum = parseInt(num); 
//         }
//     }
//     let largest = Math.max(...nums); 
//     let farqi = largest - maxNum; 
//     return farqi;
// }
// let nums = [2, 2, 1, 3, 2, 8];
// console.log(Katta_Farq(nums));







// 7-masala

// let obj1 = { value: 10 };
// let obj2 = { value: 5 };
// let max = Math.max(obj1.value, obj2.value);
// let min = Math.min(obj1.value, obj2.value);
// let result = Math.pow(max, min);
// console.log(`${max} ga teng max soni`);
// console.log(`${min} ga teng min soni`);
// console.log(`${result} ga teng ${max} sonining ${min}-darajasi`);












// 8-masala

// let arr = [1,2,3,14] 
// let total = 0
// let new_arr = Array.from(String(total), Number)
// let total_new_arr = 0
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//         total += arr[i]
//     }
//     console.log(`${total} arry ichidagi juft sonlar yigindisi`)
// }
// for (let g = 0; g < new_arr.length; g++) {
//     total_new_arr ++
// }
// console.log(total_new_arr)






// 9-masala

// let arr = [1, 2, 3, 14];
// let target = 5;
// let result = [];
// for (let i = 0; i < arr.length; i++) {
//     for (let g = i + 1; g < arr.length; g++) {
//         if (arr[i] + arr[g] === target) {
//             result.push([arr[i], arr[g]]);
//         }
//     }
// }
// console.log(result);









// 10-masala

// function IsPalidrom(params) {
// let type = typeof params
// let new_number = 0
// if (params === new_number) {
//     return "palidrome"
// } else {
//     return "palidrome emas"
// }
// }
// IsPalidrom(11)









// 11-masala

// let promptt = prompt("Soz kiriting");
// function isPalindrome(text) {
//     const reversedWord = text.split('').reverse().join('');
//     return text.toLowerCase() === reversedWord.toLowerCase();
// }
// function checkPalindrome(promptValue, callback) {
//     const result = callback(promptValue);
//     if (result) {
//         console.log(`${promptValue} palidrom`);
//     } else {
//         console.log(`${promptValue} palidrom emas`);
//     }
// }
// checkPalindrome(promptt, isPalindrome);










// 12-masala

// const numbers = (...params) =>{
//     let total = 0
//     for (let i = 0; i < params.length; i++) {
//         total += params[i]
//     }
//     console.log(total);
//     let arr = Array.from(String(total), Number)
//     console.log(arr);
// }
// numbers(2,4,6,8,9)









// 13-masala    

// var addTwoNumbers = function(l1, l2) {
//     let num1 = parseInt(l1.join(''));
//     let num2 = parseInt(l2.join(''));
//     let sum = num1 + num2;
//     let result = sum.toString().split('').reverse().map(Number);
//     console.log(result);
//   };
//   let l1 = [2, 4, 3];
//   let l2 = [5, 6, 4];
//   addTwoNumbers(l1, l2);
  