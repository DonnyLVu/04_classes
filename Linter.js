const { Stack } = require('./Stack.js');

const bracketsArray = [
  '(',
  ')',
  '[',
  ']',
  '{',
  '}'
];
const matchingBrackets = {
  '(': ')',
  '[': ']',
  '{': '}',
  ')': '(',
  ']': '[',
  '}': '{'
};
const openingBrackets = [
  '(',
  '[',
  '{'
];

const brackets = (item) => {
  return item
    .split('')
    .filter(item => bracketsArray.includes(item))
}

const looping = (loops) => {
  const itemStack = new Stack();
  let result = true

  loops.map(bracket => {
    const peek = itemStack.peek();
    if (
      openingBrackets.includes(bracket)) {
      itemStack.push(bracket)
    } else {
      if (matchingBrackets[bracket] === peek) {
        itemStack.pop()
      } else {
        result = {
          missing: matchingBrackets[peek || bracket]
        };
      };
    };
  });
  return result;
};

const linter = (body) => {
  const bracketArr = brackets(body)
  const result = looping(bracketArr)
  if (result === true) {
    return {
      'success': true
    }
  } else return {
    'error': `missing ${result.missing}`
  }
}

const testLinter = linter('function add(a, b) {]return a + b;}')



module.exports = {
  linter
};