class Stack {
  #stack;

  constructor() {
    this.#stack = [];
  }

  push(item) {
    this.#stack = []
  }

  pop() {
    return this.#stack.pop();
  }

  peek() {
    return this.#stack[this.#stack.length - 1];
  }
}

module.exports = {
  Stack
};

// const theStack = new Stack();
// theStack.push("[");
// console.log(theStack)
// theStack.pop();
// console.log(theStack)
// theStack.push("whatta");
// theStack.push("dabba");
// theStack.push("doo");
// console.log(theStack.peek());
// console.log(theStack)


