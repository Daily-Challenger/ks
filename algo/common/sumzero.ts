// 정렬된 배열
// 두 수의 합이 0이 되는 값에 해당하는 두 값을 반환 하시오

// [-3, -2, -1, 0, 1, 2, 3] => [-3, 3]
// [1, 2, 3] => undefined
// [-2, 0, 1, 3] => undefined
function sumzero(array: number[]) {
  if (array.length < 2) return undefined;

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      // 내부에서 합계산
      const sum = array[i] + array[j];
      if (sum === 0) {
        return [array[i], array[j]];
      }
    }
  }
  return undefined;
}

console.log(advancedSumzero([-3, -2, -1, 0, 1, 2, 3]));
console.log(advancedSumzero([-1, 0, 1]));
console.log(advancedSumzero([1, 2, 3]));
console.log(advancedSumzero([-2, 0, 1, 3]));
console.log(advancedSumzero([2]));
console.log(advancedSumzero([-2]));
console.log(advancedSumzero([]));

// 위와 같이 실행했을때 (O^2)

// 배열에 두개의 포인터를 둔다.
// 첫번째 포인터는 맨 앞 index = 0
// 두번째 포인터는 맨 뒤 array.length - 1

function advancedSumzero(array: number[]) {
  if (array.length < 2) return undefined;

  let firstPointer = 0;
  let secondPointer = array.length - 1;

  // 반복문 진행은 i < j 때까지 같거나 작아지면 종료되어야함.
  while (firstPointer < secondPointer) {
    // 두 요소의 합이 0이되면 지금 index로 요소에 접근해 return

    const sum = array[firstPointer] + array[secondPointer];

    if (sum === 0) {
      return [array[firstPointer], array[secondPointer]];
    }
    // 두 요소의 합이 0보다 크면 두번째 포인터를 index 1 감소시킴
    if (sum > 0) {
      secondPointer = secondPointer - 1;
    } else {
      // 두 요소의 합이 0보다 작으면 첫번째 포인터를 index 1 증가시킴
      firstPointer = firstPointer + 1;
    }
  }

  return undefined;
}

// 3번 방향 요소들에 절대값 처리해서 객체로 만든후 2개인거 새려고 했는데 순서가 없어지므로 안될듯

// 고려해야할 엣지 케이스
// 1. [0, 0]
// 2. 음수만 있는 경우 [-5, -4, -3, -2, -1]
// 3. 배열 자체가 null/undefined
// 4. 정렬되지 않은 배열 => 문제 조건 보기
