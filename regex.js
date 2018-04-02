
let str = ' This is my first sentence. This is my second sentence. '

let newString = str.replace(/(?<=This is)(.*)(?=sentence)/g, ' ');

console.log(newString);
