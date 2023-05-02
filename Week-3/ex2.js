console.log("==========================================================");
// bind returns new funtion and bind the object to the function
// bind example
const bindObj = {
  name: "Jasham",
};
function bindFn(desc) {
  console.log(desc, this.name);
}
console.log("Demostration of Bind method");
console.log("Before bind");
bindFn("Here this key will point to window object and gives undefined");
const bindReturnFunction = bindFn.bind(bindObj);
console.log("After bind");
bindReturnFunction(
  "Here this key will point to the object and gives object keys value that is"
);
console.log("==========================================================");
// Call doesn't return new function
// call example
console.log("Demostration of Call method");

const callObj = {
  name: "Rajesh",
};

function callFn(desc) {
  console.log(desc, this.name);
}
console.log("Before applying call method");
callFn(
  "Here this key will point to window object and window object is not having name property so the answer will be 'undefined'"
);
console.log("After applying call method");
callFn.call(
  callObj,
  "Here this key will point to callObj object and and provide the value to funtion when applied with call method."
);
console.log("==========================================================");
console.log("Demostration of Apply method");
// Apply method is same as call method but the only difference is passign of arguments. Apply method takes positional arguments.
let obj1 = ["Rajesh", "Jasham"];
let obj2 = ["Jasham", "Rajesh"];
function applyFn(desc) {
  if (this[0] === "Rajesh" && this[1] === "Jasham")
    console.log("Apply method is applied successfully");
  else
    console.log(
      "Apply method is not applied successfully because of wrong positional arguments. It should be ['Rajesh', 'Jasham']"
    );
}
applyFn.apply(obj1);
applyFn.apply(obj2);
console.log("==========================================================");
