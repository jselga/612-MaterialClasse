const p1 = new Promise(resolve => setTimeout(() => resolve('P1 resolta'), 1000));
const p2 = new Promise(resolve => setTimeout(() => resolve('P2 resolta'), 2000));
const p3 = new Promise((_, reject) => setTimeout(() => reject('P3 rebutjada'), 1500));

// Promise.all
Promise.all([p1, p2,p3])
  .then(res => console.log('ALL:', res))
  .catch(err => console.error('ALL error:', err));

// Promise.race
Promise.race([p1, p2,p3])
  .then(res => console.log('RACE:', res));

// Promise.any
Promise.any([p3, p1,p2])
  .then(res => console.log('ANY:', res))
  .catch(err => console.error(err));

// Promise.allSettled
Promise.allSettled([p1,,p2, p3])
  .then(res => console.log('ALL SETTLED:', res));
