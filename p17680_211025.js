// 캐시(Level 2)
// https://programmers.co.kr/learn/courses/30/lessons/17680

const solution = (cacheSize, cities) => {
  const citiesArray = cities.map(el => el.toLowerCase());
  let queue = [];
  let runtime = 0;
  if (cacheSize === 0) {
    return cities.length * 5;
  }
  citiesArray.forEach(el => {
    if (queue.includes(el)) {
      delete queue[queue.indexOf(el)];
      queue = queue.filter(el => el);
      queue.push(el);
      runtime += 1;
    } else if (queue.length < cacheSize) {
      queue.push(el);
      runtime += 5;
    } else {
      queue.shift();
      queue.push(el);
      runtime += 5;
    }
  });
  return runtime;
};

// const cacheSize = 3;
// const cities = [
//   'Jeju',
//   'Pangyo',
//   'Seoul',
//   'NewYork',
//   'LA',
//   'Jeju',
//   'Pangyo',
//   'Seoul',
//   'NewYork',
//   'LA',
// ];

// const cacheSize = 5;
// const cities = [
//   'Jeju',
//   'Pangyo',
//   'Seoul',
//   'NewYork',
//   'LA',
//   'SanFrancisco',
//   'Seoul',
//   'Rome',
//   'Paris',
//   'Jeju',
//   'NewYork',
//   'Rome',
// ];

// const cacheSize = 3;
// const cities = ['Jeju', 'Pangyo', 'Seoul', 'Jeju', 'Pangyo', 'Seoul', 'Jeju', 'Pangyo', 'Seoul'];

const cacheSize = 2;
const cities = ['Jeju', 'Pangyo', 'NewYork', 'newyork'];

console.log(solution(cacheSize, cities));
