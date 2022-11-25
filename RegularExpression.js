let re;

// re = /hello/;
re = /hello/i; //i flag for case insensitive
re = /hello/g; //Global search
console.log(re);
console.log(re.source);
//-------------------------------------------
//exac() - Return result in an array or null
const result = re.exec("hello world !");

console.log(result);
console.log(result[0]);
console.log(result.index);
console.log(result.input);
//-------------------------------------------

//text() - Return true or false
const result = re.test("Hello");
console.log(result); //true

//-------------------------------------------

//match() - Return result array or null

const str = "Hello There";
const result = str.match(re);
console.log(result);
//-------------------------------------------

// search() = Returns index of the first match if not found return -1

const str = "Hell There !";
const result = str.search(re);
console.log(result);
//-------------------------------------------

//Replace() - Return a new string with some or all matches of a pattern

const str = "Hello there";
const newStr = str.replace(re, "Hii");
console.log(newStr);
