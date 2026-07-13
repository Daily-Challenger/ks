function same(array1: number[], array2: number[]) {
  // array1이나 array2가 둘중 하나가 빈 배열이면 false를 반환
  if (array1.length === 0 || array2.length === 0) return false;

  // 두 배열의 사이즈가 다르면 false를 반환
  if (array1.length !== array2.length) return false;

  // 첫번째 배열을 loop 돌리면서 제곱된 결과를 변수에 저장.
  for (let number of array1) {
    const squredNumber = number * number;
    // 두번째 배열에 첫번째 제곱근의 결과가 있는지 findIndex로 찾기 -1이면 false 반환
    const index = array2.findIndex((number) => number === squredNumber);
    if (index === -1) return false;
    // 찾았으면 두번째 배열에서 그 요소를 찾아 지움.
    array2.splice(index, 1);
  }

  if (array2.length > 0) return false;

  return true;
}

function advancedSame(array1: number[], array2: number[]) {
  if (array1.length === 0 || array2.length === 0) return false;

  if (array1.length !== array2.length) return false;

  // 숫자와 빈도를 나타내는 Map 자료구조를 미리 생성해둔다.
  const frequencyCounter1 = new Map<number, number>();

  array2.forEach((number) => {
    const value = frequencyCounter1.get(number);
    if (!value) {
      frequencyCounter1.set(number, 1);
    } else {
      frequencyCounter1.set(number, value + 1);
    }
  });

  // 배열을 순회하면서, 맵의 키로 배열의 요소를 get해서 없으면 false 반환

  for (let number of array1) {
    const square = number * number;
    // 맵에 값이 없거나, 값이 0이면 false 반환
    if (!frequencyCounter1.has(square) || frequencyCounter1.get(square) === 0) {
      return false;
    }
    // get해서 값이 0
    const currentValue = frequencyCounter1.get(square);
    if (currentValue !== undefined) {
      frequencyCounter1.set(square, currentValue - 1);
    }
  }

  return true;
}

// 두 개의 Map을 사용한 Frequency Counter 패턴
function doubleMapSame(array1: number[], array2: number[]) {
  // 두 배열의 길이가 다르면 false
  if (array1.length !== array2.length) return false;

  // 빈 배열이면 false
  if (array1.length === 0 || array2.length === 0) return false;

  // 첫 번째 배열의 제곱 빈도를 저장할 Map
  const squaredFrequency = new Map<number, number>();

  // 두 번째 배열의 빈도를 저장할 Map
  const arrayFrequency = new Map<number, number>();

  // array1을 순회하면서 제곱된 값의 빈도를 저장
  for (let num of array1) {
    const squared = num * num;
    squaredFrequency.set(squared, (squaredFrequency.get(squared) || 0) + 1);
  }

  // array2를 순회하면서 빈도를 저장
  for (let num of array2) {
    arrayFrequency.set(num, (arrayFrequency.get(num) || 0) + 1);
  }

  // 두 Map을 비교: squaredFrequency의 모든 키와 값이 arrayFrequency에 있는지 확인
  for (let [key, count] of squaredFrequency) {
    // arrayFrequency에 해당 키가 없거나, 빈도가 다르면 false
    if (arrayFrequency.get(key) !== count) {
      return false;
    }
  }

  return true;
}

// 테스트 케이스
console.log('=== same() 함수 테스트 ===');
console.log(
  'same([1, 2, 3, 4, 5], [1, 4, 9, 16, 25]):',
  same([1, 2, 3, 4, 5], [1, 4, 9, 16, 25]),
);
console.log(
  'same([1, 2, 3, 4, 5], [1, 4, 9, 16, 16]):',
  same([1, 2, 3, 4, 5], [1, 4, 9, 16, 16]),
);
console.log('same([1, 2, 1], [1, 4, 1]):', same([1, 2, 1], [1, 4, 1]));

console.log('\n=== advancedSame() 함수 테스트 ===');
console.log(
  'advancedSame([1, 2, 3, 4, 5], [1, 4, 9, 16, 25]):',
  advancedSame([1, 2, 3, 4, 5], [1, 4, 9, 16, 25]),
);
console.log(
  'advancedSame([1, 2, 3, 4, 5], [1, 4, 9, 16, 16]):',
  advancedSame([1, 2, 3, 4, 5], [1, 4, 9, 16, 16]),
);
console.log(
  'advancedSame([1, 2, 1], [1, 4, 1]):',
  advancedSame([1, 2, 1], [1, 4, 1]),
);

console.log('\n=== doubleMapSame() 함수 테스트 ===');
console.log(
  'doubleMapSame([1, 2, 3, 4, 5], [1, 4, 9, 16, 25]):',
  doubleMapSame([1, 2, 3, 4, 5], [1, 4, 9, 16, 25]),
);
console.log(
  'doubleMapSame([1, 2, 3, 4, 5], [1, 4, 9, 16, 16]):',
  doubleMapSame([1, 2, 3, 4, 5], [1, 4, 9, 16, 16]),
);
console.log(
  'doubleMapSame([1, 2, 1], [1, 4, 1]):',
  doubleMapSame([1, 2, 1], [1, 4, 1]),
);
