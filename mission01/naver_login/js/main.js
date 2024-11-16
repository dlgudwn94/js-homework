const user = {
  id: 'asd@naver.com',
  pw: 'spdlqj123!@',
};
const emailInput = document.getElementById('userEmail');
const pwInput = document.getElementById('userPassword');
const loginForm = document.querySelector('.login-form');

/*
일치하는 아이디와 비밀번호를 입력했을 경우 welcome 페이지로 이동하는 코드 로직을 작성해주세요.
1. email 정규표현식을 사용한 validation
  - false면 해당 input에 is--invalid 추가
			node.classList.remove('is--invalid')
  - true면 해당 input에 is--invalid 제거
			node.classList.add('is--invalid')
2. pw 정규표현식을 사용한 validation
  - false면 해당 input에 is--invalid 추가
			node.classList.remove('is--invalid')
  - true면 해당 input에 is--invalid 제거
			node.classList.add('is--invalid')
3. 상태 변수 관리
4. 로그인 버튼을 클릭시 조건처리
  - user.id의 값과 input의 값을 비교
      value === user.id
  - user.pw의 값과 input의 값을 비교
      value === user.pw
5. 두 값이 일치한다면 다음 페이지(welcome.html)로 이동
*/

function emailReg(text) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase());
}

function pwReg(text) {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}

function validate() {
  const validateInput = (input, reg) => {
    input.addEventListener('input', (event) => {
      if (!reg(event.target.value)) {
        event.target.classList.add('is--invalid');
      } else {
        event.target.classList.remove('is--invalid');
      }
    });
  };

  validateInput(emailInput, emailReg);
  validateInput(pwInput, pwReg);
}

validate();

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();
  emailInput.value === user.id && pwInput.value === user.pw
    ? (location.href = 'welcome.html')
    : alert('로그인 정보가 일치하지 않습니다.');
});

// 강의 끝날 때 상태 변수 관리에 대해 이야기 하셨던 것 같은데 까먹었습니다. ㅜㅜ
