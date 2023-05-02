function createIncrement() {
  let count = 0;
  function increment() {
    count++;
  }
  let message = `Count is ${count}`;
  function log() {
    console.log(message);
  }
  return [increment, log];
}
// in the below line after execution of createIncrement funtion it will return increment and log function which is forming closure.
const [increment, log] = createIncrement();
increment(); // Here the output of count will become 1
increment(); // Here the output of count will become 2
increment(); // Here the output of count will become 3
log(); // // Here the output of will be `Count is 0`, because line no 6 is already executed when we have called createIncrement function, also the log function is forming a closure which is having value of message that is Count is 0
