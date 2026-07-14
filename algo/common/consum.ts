// countUniqueValues([1,1,1,1,1,2]) // 2
// countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
// countUniqueValues([]) // 0
// countUniqueValues([-2,-1,-1,0,1]) // 4

// 주의: 투 포인터 방식은 배열이 오름차순 정렬되어 있다는 전제가 필요하다.
function countUniqueValues(array: number[]) {
  // 배열의 길이가 0이면 0을 return 한다.
  if (array.length === 0) return 0;

  let xPosition = 0;
  let yPosition = xPosition + 1;

  while (yPosition < array.length) {
    // xpoistion과 yposition이 같을때는 y position을 1씩 증가시긴다.
    if (array[xPosition] === array[yPosition]) {
      yPosition++;
    } else {
      xPosition++;
      array[xPosition] = array[yPosition];
      yPosition++;
    }
  }
  //  반복문 빠져나오고, 마지막에 계산
  return xPosition + 1;
}

const hello = countUniqueValues([-2, -1, -1, 0, 1]); // 4
console.log(hello);

function countUniqueValues2(array: number[]): number {
  const set = new Set(array);
  return set.size;
}

export {};
