/* 문제: 객체에서 특정 키의 값을 안전하게 가져오는 함수를 작성하세요.
// 설명: 객체와 키를 인수로 받아, 객체에 해당 키가 존재하면 그 키에 해당하는 값을 반환하고,
존재하지 않으면 에러를 발생시키는 함수를 작성하세요. */

function getValueAtObject(obj, key) {
  if (key in obj == true) {
    console.log(obj[key]);
  } else {
    console.error('Error!');
  }
}

const person = {
  name: 'BeomSsam',
  age: 40,
  city: 'Seoul',
};

getValueAtObject(person, 'name');
getValueAtObject(person, 'age');
getValueAtObject(person, 'city');
getValueAtObject(person, 'country');

/* 문제: 배열에서 특정 인덱스의 값을 안전하게 가져오는 함수를 작성하세요.
설명: 배열과 인덱스를 인수로 받아, 인덱스가 배열의 유효한 범위 내에 있으면 그 인덱스에 해당하는 값을 반환하고, 
유효하지 않은 인덱스일 경우 에러 메시지를 반환하는 함수를 작성하세요. 
- 배열의 인덱스는 0부터 시작하며, 주어진 인덱스가 배열의 유효한 범위 내에 있는지 확인해야 합니다.
- 인수로 받은 대상이 배열이 아닐 경우 에러를 생성하고 생성한 에러를 반환해야 합니다.
- 유효한 인덱스일 경우 해당 인덱스의 값을 반환하고, 그렇지 않으면  에러를 생성하고 생성한 에러를 반환해야 합니다.*/

function getNumberAtArray(arr, index) {
  if (index in arr == true) {
    console.log(arr.at(index));
  } else {
    console.error('Error!');
    return;
  }
}

const numbers = [94, 0, 11, 7, 19];

getNumberAtArray(numbers, 0);
getNumberAtArray(numbers, 2);
getNumberAtArray(numbers, 1);
getNumberAtArray(numbers, 3);
getNumberAtArray(numbers, -1);
