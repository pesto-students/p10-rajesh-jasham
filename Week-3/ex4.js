function createStack() {
  let items = [];
  function push(item) {
    items.push(item);
  }
  function pop() {
    let popedItem = items.pop();
    return popedItem;
  }
  return { push, pop };
}
const stack = createStack();
stack.push(10);
stack.push(5);
stack.pop(); // => 5
stack.items = [10, 100, 1000]; // Encapsulation broken!
stack.push(10);
