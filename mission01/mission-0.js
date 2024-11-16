// /* 문제: 객체에서 특정 키의 값을 안전하게 가져오는 함수를 작성하세요.
// // 설명: 객체와 키를 인수로 받아, 객체에 해당 키가 존재하면 그 키에 해당하는 값을 반환하고,
// 존재하지 않으면 에러를 발생시키는 함수를 작성하세요. */

// function getValueAtObject(obj, key) {
//   if (key in obj == true) {
//     console.log(obj[key]);
//   } else {
//     console.error('Error!');
//   }
// }

// const person = {
//   name: 'BeomSsam',
//   age: 40,
//   city: 'Seoul',
// };

// getValueAtObject(person, 'name');
// getValueAtObject(person, 'age');
// getValueAtObject(person, 'city');
// getValueAtObject(person, 'country');

// /* 문제: 배열에서 특정 인덱스의 값을 안전하게 가져오는 함수를 작성하세요.
// 설명: 배열과 인덱스를 인수로 받아, 인덱스가 배열의 유효한 범위 내에 있으면 그 인덱스에 해당하는 값을 반환하고,
// 유효하지 않은 인덱스일 경우 에러 메시지를 반환하는 함수를 작성하세요.
// - 배열의 인덱스는 0부터 시작하며, 주어진 인덱스가 배열의 유효한 범위 내에 있는지 확인해야 합니다.
// - 인수로 받은 대상이 배열이 아닐 경우 에러를 생성하고 생성한 에러를 반환해야 합니다.
// - 유효한 인덱스일 경우 해당 인덱스의 값을 반환하고, 그렇지 않으면  에러를 생성하고 생성한 에러를 반환해야 합니다.*/

// function getNumberAtArray(arr, index) {
//   if (index in arr == true) {
//     console.log(arr.at(index));
//   } else {
//     console.error('Error!');
//     return;
//   }
// }

// const numbers = [94, 0, 11, 7, 19];

// getNumberAtArray(numbers, 0);
// getNumberAtArray(numbers, 2);
// getNumberAtArray(numbers, 1);
// getNumberAtArray(numbers, 3);
// getNumberAtArray(numbers, -1);

const obj = {
  name: 'tiger',
  age: 40,
};

// 객체에 키를 입력했을 때 값이 나오길 기대
// 함수는 매개변수를 유연하게 받을수록 재사용성이 증가

function getValueAtObject(object, key) {
  // if(!(Object.prototype.toString.call(object).slice(8,-1).toLowerCase() === 'object')){

  if (!(typeof object === 'object')) {
    throw new TypeError(
      'getValueAtObject 함수의 첫 번째 인수는 객체 타입 이어야 합니다.'
    );
  }

  if (typeof key !== 'string') {
    throw new TypeError(
      'getValueAtObject 함수의 두 번째 인수는 문자 타입 이어야 합니다.'
    );
  }

  if (!(key in object)) {
    throw new SyntaxError('해당 객체에는 key값이 존재하지 않습니다.');
  }

  return object[key];
}

// console.log( getValueAtObject(obj,'name') );

function _getValueAtObject(object, key) {
  const entries = Object.entries(object);
  let value;
  // for(let [k,v] of entries) if(k === key ) return v

  entries.forEach(([k, v]) => (k === key ? (value = v) : ''));

  return value;
}

console.log(_getValueAtObject(obj, 'name'));

// 뭐 부터 시작하지?

// 1. 함수의 이름
// 2. 함수의 실행부 작성
// 3. 함수의 로직
// 4. validation

const arr = ['정주연', '박혜미', '김영현'];

function getNumberAtArray(array, index) {
  if (!Array.isArray(array)) {
    throw new Error(
      `전달된 첫 번째 인수의 데이터 타입은 ${typeof array} 타입 입니다. 해당 함수의 첫 번째 인수는 배열 타입 이어야 합니다.`
    );
  }

  if (index >= 0 && index < array.length) {
    return array[index];
  } else {
    throw new Error('...');
  }
}

console.log(getNumberAtArray(arr, 3));
