const arrayOne = ['a', 4, 56, 'q', 'b', 2, 7, 77, 'b', 'x', 1, 'h', 0, 12];
const arrayTwo = [8, 2, 54, 'd', 'g', 3, 'j', 5, 6, 't', 7, 8, 's', 'b', 12, 345];

// 1.
const numericValuesInArrayOne = arrayOne.filter(value => typeof value === 'number');
const numericValuesInArrayTwo = arrayTwo.filter(value => typeof value === 'number');

// 2.
const combinedArray = [...numericValuesInArrayOne, ...numericValuesInArrayTwo];

// 3.
const arrayWithoutDuplicates = combinedArray.filter((element, index, array) => array.indexOf(element) === index);

// 4.
const sumTotal = arrayWithoutDuplicates.reduce((a, b) => a + b, 0);

// 5.
console.log(sumTotal);
