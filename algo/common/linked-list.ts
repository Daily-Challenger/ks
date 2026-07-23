// 단일 연결 리스트 (Singly Linked List)
// 각 노드가 값(value)과 다음 노드를 가리키는 포인터(next)를 가진다.
// 배열과 달리 인덱스가 없고, head부터 next를 타고 순차적으로 접근한다.

// 노드 하나를 표현하는 클래스
class ListNode<T> {
  value: T;
  next: ListNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList<T> {
  head: ListNode<T> | null; // 첫 번째 노드
  tail: ListNode<T> | null; // 마지막 노드
  length: number; // 노드 개수

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // 리스트 끝에 노드 추가 - O(1)
  push(value: T) {
    const newNode = new ListNode(value);

    // 비어있으면 head와 tail 모두 새 노드
    if (!this.head || !this.tail) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // 기존 tail의 next를 새 노드로 연결하고 tail 갱신
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  // 리스트 끝 노드 제거 - O(n)
  // 마지막 노드를 지우려면 그 직전 노드를 찾아야 해서 순회가 필요하다.
  pop() {
    if (!this.head) {
      return undefined;
    }

    let current = this.head;
    let prev = current;

    // current가 마지막 노드가 될 때까지 이동
    while (current.next) {
      prev = current;
      current = current.next;
    }

    // 직전 노드를 새 tail로 만들고 연결 끊기
    this.tail = prev;
    this.tail.next = null;
    this.length--;

    // 노드가 하나뿐이었다면 리스트를 비운다
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return current.value;
  }

  // 특정 값 탐색 - O(n)
  find(value: T) {
    let current = this.head;

    while (current) {
      if (current.value === value) {
        return current;
      }
      current = current.next;
    }

    return null;
  }

  // 전체 값을 배열로 변환 (확인용) - O(n)
  toArray() {
    const result: T[] = [];
    let current = this.head;

    while (current) {
      result.push(current.value);
      current = current.next;
    }

    return result;
  }
}

const list = new LinkedList<number>();
list.push(1).push(2).push(3);
console.log("리스트", list.toArray()); // [1, 2, 3]
console.log("pop", list.pop()); // 3
console.log("pop 후", list.toArray()); // [1, 2]
console.log("find(2)", list.find(2)?.value); // 2
