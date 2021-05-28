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
  Expression: [['AssignmentExpression']],
  AssignmentExpression: [
    ['LeftHandSideExpression', '=', 'LogicalORExpression'],
    ['LogicalORExpression'],
  ],
  LogicalORExpression: [
    ['LogicalANDExpression'],
    ['LogicalORExpression', '||', 'LogicalANDExpression'],
  ],
  LogicalANDExpression: [
    ['AdditiveExpression'],
    ['LogicalANDExpression', '&&', 'AdditiveExpression'],
  ],
  AdditiveExpression: [
    ['MultiplicativeExpression'],
    ['AdditiveExpression', '+', 'MultiplicativeExpression'],
    ['AdditiveExpression', '-', 'MultiplicativeExpression'],
  ],
  MultiplicativeExpression: [
    ['LeftHandSideExpression'],
    ['MultiplicativeExpression', '*', 'LeftHandSideExpression'],
    ['MultiplicativeExpression', '/', 'LeftHandSideExpression'],
  ],
  LeftHandSideExpression: [['CallExpression'], ['NewExpression']],
  CallExpression: [
    ['MemberExpression', 'Arguments'],
    ['CallExpression', 'Arguments'],
  ], // new a()
  NewExpression: [['MemberExpression'], ['new', 'NewExpression']], // new a
  MemberExpression: [
    ['PrimaryExpression'],
    ['PrimaryExpression', '.', 'Identifier'],
    ['PrimaryExpression', '[', 'Expression', ']'],
  ], // new a.b()
  /*
    new f().a().a
  */
  PrimaryExpression: [['(', 'Expression', ')'], ['Literal'], ['Identifier']],
  Literal: [
    ['NumericLiteral'],
    ['StringLiteral'],
    ['BooleanLiteral'],
    ['NullLiteral'],
    ['RegularExpressionLiteral'],
    ['ObjectLiteral'],
    ['ArrayLiteral'],
  ],
  ObjectLiteral: [
    ['{', '}'],
    ['{', 'PropertyList', '}'],
  ],
  PropertyList: [['Property'], ['PropertyList', ',', 'Property']],
  Property: [
    ['StringLiteral', ':', 'AdditiveExpression'],
    ['Identifier', ':', 'AdditiveExpression'],
  ],
};

let hash = {};

function closure(state) {
  hash[JSON.stringify(state)] = state;
  let queue = [];
  for (let symbol in state) {
    if (symbol.match(/^\$/)) {
      continue;
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
        current.$reduceLength = rule.length;
      }
    }
  }
  for (let symbol in state) {
    if (symbol.match(/^\$/)) {
      continue;
    }
    // console.log(symbol);
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

export function parse(source) {
  let stack = [start];
  let symbolStack = [];
  function reduce() {
    let state = stack[stack.length - 1];

    if (state.$reduceType) {
      let children = [];
      for (let i = 0; i < state.$reduceLength; i++) {
        stack.pop();
        children.push(symbolStack.pop());
      }
      //create a non-terminal symbol and shift it

      return {
        type: state.$reduceType,
        children: children.reverse(),
      };
    } else {
      throw new Error('unexpected token');
    }
  }
  function shift(symbol) {
    let state = stack[stack.length - 1];
    if (symbol.type in state) {
      stack.push(state[symbol.type]);
      symbolStack.push(symbol);
    } else {
      /*reduce to non-terminal symbols*/
      shift(reduce());
      shift(symbol);
    }
  }

  for (let symbol /*terminal symbols*/ of scan(source)) {
    shift(symbol);
  }

  return reduce();
}
