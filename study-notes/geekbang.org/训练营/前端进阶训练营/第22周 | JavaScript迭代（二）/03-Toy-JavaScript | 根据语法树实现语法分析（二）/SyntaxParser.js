import { scan } from './LexParser.js';

let syntax = {
  Program: [['StatementList', 'EOF']],
  StatementList: [['Statement'], ['StatementList', 'Statement']],
  Statement: [
    ['ExpressionStatement'],
    ['IfStatement'],
    ['VariableDeclaration'],
    ['FunctionDeclaration'],
  ],
  IfStatement: [['if', '(', 'Expression', ')', 'Statement']],
  VariableDeclaration: [
    ['var', 'Identifier', ';'],
    ['let', 'Identifier', ';'],
  ],
  FunctionDeclaration: [
    ['function', 'Identifier', '(', ')', '{', 'StatementList', '}'],
  ],
  ExpressionStatement: [['Expression', ';']],
  Expression: [['AdditiveExpression']],
  AdditiveExpression: [
    ['MultiplicativeExpression'],
    ['AdditiveExpression', '+', 'MultiplicativeExpression'],
    ['AdditiveExpression', '-', 'MultiplicativeExpression'],
  ],
  MultiplicativeExpression: [
    ['PrimaryExpression'],
    ['MultiplicativeExpression', '*', 'PrimaryExpression'],
    ['MultiplicativeExpression', '/', 'PrimaryExpression'],
  ],
  PrimaryExpression: [['(', 'Expression', ')'], ['Literal'], ['Identifier']],
  Literal: [['Number']],
};

let hash = {};

function closure(state) {
  hash[JSON.stringify(state)] = state;
  let queue = [];
  for (let symbol in state) {
    if (symbol.match(/^$/)) {
      return;
    }
    queue.push(symbol);
  }
  while (queue.length) {
    let symbol = queue.shift();

    if (syntax[symbol]) {
      for (let rule of syntax[symbol]) {
        if (!state[rule[0]]) queue.push(rule[0]);

        let current = state;
        for (let part of rule) {
          if (!current[part]) current[part] = {};
          current = current[part];
        }
        current.$reduceType = symbol;
        current.$reduceState = state;
      }
    }
  }
  for (let symbol in state) {
    if (symbol.match(/^$/)) {
      return;
    }
    console.log(symbol);
    if (hash[JSON.stringify(state[symbol])])
      state[symbol] = hash[JSON.stringify(state[symbol])];
    else closure(state[symbol]);
  }
}

let end = {
  $isEnd: true,
};

let start = {
  Program: end,
};

closure(start);

let source = `
  var a;
`;

function parse(source) {
  let state = start;
  for (let symbol /*terminal symbols*/ of scan(source)) {
    if (symbol.type in state) {
      console.log(state);
      state = state[symbol.type];
    } else {
      /*reduce to non-terminal symbols*/
      if (state.$reduceType) {
        state = state.$reduceState;
      }
      debugger;
    }
    console.log(symbol);
  }
}

parse(source);
