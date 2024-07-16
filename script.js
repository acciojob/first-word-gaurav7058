function firstWord(str) {
  // your code here
	 
let spaceStr=str.trim();
let firstWord=spaceStr.split(' ')[0];
return firstWord
	 if (str="") {
    return "" 
}
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
