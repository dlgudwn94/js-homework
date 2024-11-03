## Java Scirpt 1차 과제

### 회고

1차 과제를 진행하면서 해결이 어려웠던 부분은  
예시 코드에 있던대로 console.log로 함수를 출력하려다 보니  
함수에서 console.error을 출력하게 될 때 error 밑에 undefined가 한 줄 더 출력이 되는 문제가 있었습니다.  
함수 내부에서 console.error을 출력 후 return; 으로 리턴 값을 안 주도록 명시를 해도 undefined가 출력되어  
console.log로 함수를 출력하지 않고 함수 내부에서 console.log와 console.error를 출력할 수 있도록 해결했습니다.

제가 찾은 방법을 제외하고 console.log로 출력하는 함수 내부에서 console.error를 출력할 때  
undefined가 출력되지 않게 할 수 있는 방법이 있는지 궁금합니다.
