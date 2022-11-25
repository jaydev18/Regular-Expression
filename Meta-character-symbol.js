let re;

//literal character

re = /hello/;
re = /hello/i;

//Metacharacter symbol
re = /^h/i; //Must start with
re = /d$/i; //must end with we can test /world$/i - here d is the last character, it matched with str last character d
re = /^hello$/i; //Begin with and end with
re = /h.llo/i; //Matches any ONE character /begin and with
re = /h*llo/i; //Matches any Character 0 or more time
re = /gre?a?y/i; // Optional character

//Bracket [] - character sets

re = /gr[ae]y/i; //Must be an a or e
re = /[GF]ray/i; //Must be an G or F
re = /[^GF]ray/i; //Match anything except G or F
re = /[A-Z]ray/; //Match any Uppercase letter
re = /[a-z]ray/; //Match any lowercase letter
re = /[A-Za-z]ray/; //Match any uppercase and lowercase letter
re = /[0-9]ray/; //Match any digit

//Braces {} - Quantifiers

re = /hel{2}o/i; //Must occur exactly {m} amount of time
re = /hel{2,4}o/i; //Must occur exactly {m} amount of time
re = /hel{2,}o/i; //Must occur at least {m, times}

//Paretheses() - Grouping
re = /^([0-9]x){3}$/;

//shorthand character classes
re = /\w/; //word character - alphanumberic or _
re = /w+/; // + = one or more
re = /\W/; // Non-word character ex- !@#%^&*()
re = /\d/; //Match any digit
re = /\d+/; //Match any digit 0 or more time
re = /D/; //Match any Non-digit character
re = /\s/; //Match any white space character
re = /\S/; //Match any non-white space character
re = /Hell/i; //Word boundary

//Assertions

re = /x(?=y)/; //Match x only if followed by y ex- "jaxy"
re = /x(?!y)/; //Match x only if Not followed by y ex- "jaxy"

//string to match
const str = "Hello welcome to Hell";
//log results
const result = re.exec(str);
console.log(result);

function reTest(re, str) {
  if (re.test(str)) {
    console.log(`${str} matched ${re.source} `);
  } else {
    console.log(`${str} does not matched ${re.source} `);
  }
}

reTest(re, str);
