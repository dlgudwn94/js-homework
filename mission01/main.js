/* 문제: 객체에서 특정 키의 값을 안전하게 가져오는 함수를 작성하세요.
// 설명: 객체와 키를 인수로 받아, 객체에 해당 키가 존재하면 그 키에 해당하는 값을 반환하고,
존재하지 않으면 에러를 발생시키는 함수를 작성하세요. */

function getValueAtObject(obj, key) {
  if (obj.includes === key) {
    return console.log(key.value);
  } else {
    return console.error();
  }
}

const person = {
  name: 'BeomSsam',
  age: 35,
  city: 'Seoul',
};

console.log(getValueAtObject(person, 'age'));
