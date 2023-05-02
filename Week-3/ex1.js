const memoize = (fn) => {
  let cache = new Map();
  return function (...args) {
    let [a, b] = args;
    let ab = args.toString();
    console.log("Here is cache and value", cache.has(ab), cache, ab);
    if (cache.has(ab)) return cache.get(ab);
    let res = fn(a || 0, b || 0);
    cache.set(ab, res);

    return res;
  };
};

//Given reducer method:
function add(a, b) {
  return a + b;
}
//Create a method called memoize such that:
const memoizeAdd = memoize(add);
//then calling...
console.log("Memozed value", memoizeAdd(100, 100));
//returns 200
console.log("Memozed value", memoizeAdd(100));
//returns 100
console.log("Memozed value", memoizeAdd(100, 200));
//returns 300
console.log("Memozed value", memoizeAdd(100, 100));
//returns 200 without computing
