try {
  //produce a Reference error
  //   myfunction();
  //produce a type error
  null.myFunction();
} catch (e) {
  console.log(e);
  console.log(e.message);
  console.log(e.name);
  console.log(e instanceof ReferenceError);
} finally {
  console.log("Finally runs reguardless of result...");
}
console.log("program continue");
