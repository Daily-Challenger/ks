// 다중 포인터 - countUniqueValues
// 정렬된 배열을 받아들이고 배열의 고유 값을 세는 countUniqueValues라는 함수를 구현합니다. 배열에 음수가 있을 수 있지만 항상 정렬됩니다.

// Time Complexity - O(n)
// Space Complexity - O(n)

// countUniqueValues([1,1,1,1,1,2]) // 2
// countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
// countUniqueValues([]) // 0
// countUniqueValues([-2,-1,-1,0,1]) // 4

// 다중 포인터
function countUniqueValues(array: number[]) {
  let xPointerIndex = 0;
  let yPointerIndex = xPointerIndex + 1;

  //  while 반복문, for 반복문

  //  y포인터가 배열의 끝보다 작을때까지 실행
  while (yPointerIndex < array.length) {
    console.log(array);
    if (yPointerIndex === array.length - 1) {
      // 현재 xPointer의 index + 1 갯수.
      return xPointerIndex + 1;
    }
    // 만약 x 요소와 y요소가 같다면, y 요소만 1증가
    if (array[xPointerIndex] === array[yPointerIndex]) {
      yPointerIndex++;
    } else {
      if (yPointerIndex - xPointerIndex > 1) {
        const nextNumber = array[xPointerIndex + 1];
        array[xPointerIndex + 1] = array[yPointerIndex];
        array[yPointerIndex] = nextNumber;
      }
      xPointerIndex++;
      yPointerIndex++;
    }
  }
}

const solution = countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]);
console.log(solution);
// Set 객체로 갯수 구하기

// Map 객체로 key 깂 세기

function countUniqueValues2(array: number[]) {
  // 배열이 0일때는 0 반환
  if (!array.length) {
    return 0;
  }

  let xPointer = 0;

  for (let yPointer = 1; yPointer < array.length; yPointer++) {
    // 두 값이 다르면, x pointer를 한칸 우측으로 이동시키고, 현재 y 포인터의 값을 xPointer에 y포인터 값을 x포인터로 교체
    // yPointer는 자동으로 1이 증가한다.
    if (array[xPointer] !== array[yPointer]) {
      xPointer++;
      const temp = array[xPointer];
      array[xPointer] = array[yPointer];
      array[yPointer] = temp;
    }

    console.log(`============= 반복문 ${yPointer}번째 ==============`);
    console.log("배열", array);
  }

  return xPointer + 1;
}

const solution2 = countUniqueValues2([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]);
console.log("solution2", solution2);
