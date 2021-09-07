// 메뉴 리뉴얼(Level 2)
// https://programmers.co.kr/learn/courses/30/lessons/72411

const solution = (orders, course) => {
  const answer = [];

  // 전체 알파벳 set 구성, 오름차순 배열로 변환
  const setOrders = orders.map(e => new Set(e.split('')));
  const totalSet = [...setOrders.reduce((a, b) => new Set([...a, ...b]), new Set([]))].sort();

  let map = new Map();

  // set을 받아서 setOrders의 부분집합인 개수를 map으로 체크해 주는 함수
  const countMenu = set => {
    for (let order of setOrders) {
      if (new Set([...set].filter(x => order.has(x))).size === set.size) {
        map.set([...set].join(''), map.get([...set].join('')) + 1 || 1);
      }
    }
    return map;
  };

  for (let x of course) {
    const set = new Set();

    function DFS(L, s) {
      if (L === x) {
        countMenu(set);
      } else {
        for (let i = s; i < totalSet.length; i++) {
          set.add(totalSet[i]);
          DFS(L + 1, i + 1);
          set.delete(totalSet[i]);
        }
      }
    }
    DFS(0, 0);

    // map value의 최댓값
    let max = Math.max(...map.values());

    const mapIterator = map[Symbol.iterator]();

    for (let item of mapIterator) {
      if (max !== 1 && item[1] === max) {
        answer.push(item[0]);
      }
    }

    map = new Map();
  }
  return answer.sort();
};
const orders = ['ABCFG', 'AC', 'CDE', 'ACDE', 'BCFG', 'ACDEH'];
const course = [2, 3, 4];

console.log(solution(orders, course));
