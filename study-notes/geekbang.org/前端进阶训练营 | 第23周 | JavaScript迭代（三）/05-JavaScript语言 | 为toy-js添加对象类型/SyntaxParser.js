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
        current.$reduceLength = rule.length;
      }
    }
  }
  for (let symbol in state) {
    if (symbol.match(/^\$/)) {
      return;
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

function parse(source) {
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

let evaluator = {
  Program(node) {
    return evaluate(node.children[0]);
  },
  StatementList(node) {
    if (node.children.length === 1) {
      return evaluate(node.children[0]);
    } else {
      evaluate(node.children[0]);
      return evaluate(node.children[1]);
    }
  },
  Statement(node) {
    return evaluate(node.children[0]);
  },
  VariableDeclaration(node) {
    console.log('Declare variable', node.children[1].name);
  },
  ExpressionStatement(node) {
    return evaluate(node.children[0]);
  },
  Expression(node) {
    return evaluate(node.children[0]);
  },
  AdditiveExpression(node) {
    if (node.children.length === 1) return evaluate(node.children[0]);
    else {
      //TODO
    }
  },
  MultiplicativeExpression(node) {
    if (node.children.length === 1) return evaluate(node.children[0]);
    else {
      //TODO
    }
  },
  PrimaryExpression(node) {
    if (node.children.length === 1) return evaluate(node.children[0]);
  },
  Literal(node) {
    return evaluate(node.children[0]);
  },
  NumericLiteral(node) {
    let str = node.value;
    let l = str.length;
    let value = 0;
    let n = 10;

    if (str.match(/^0b/)) {
      n = 2;
      l -= 2;
    } else if (str.match(/^0o/)) {
      n = 8;
      l -= 2;
    } else if (str.match(/^0x/)) {
      n = 16;
      l -= 2;
    }

    while (l--) {
      let c = str.charCodeAt(str.length - l - 1);
      if (c >= 'a'.charCodeAt(0)) {
        c = c - 'a'.charCodeAt(0) + 10;
      } else if (c >= 'A'.charCodeAt(0)) {
        c = c - 'A'.charCodeAt(0) + 10;
      } else if (c >= '0'.charCodeAt(0)) {
        c = c - '0'.charCodeAt(0);
      }
      value = value * n + c;
    }

    console.log(value);

    return Number(node.value);
    // return evaluate(node.children[0]);
  },
  StringLiteral(node) {
    let i = 1;
    let result = [];

    for (let i = 1; i < node.value.length - 1; i++) {
      if (node.value[i] == '\\') {
        ++i;
        let c = node.value[i];
        let map = {
          '"': '"',
          "'": "'",
          '\\': '\\',
          0: String.fromCharCode(0x0000),
          b: String.fromCharCode(0x0008),
          f: String.fromCharCode(0x000c),
          n: String.fromCharCode(0x000a),
          r: String.fromCharCode(0x000d),
          t: String.fromCharCode(0x0009),
          v: String.fromCharCode(0x000b),
        };
        if (c in map) {
          result.push(map[c]);
        } else {
          result.push(c);
        }
      } else {
        result.push(node.value[i]);
      }
    }
    console.log(result);
    return result.join('');
  },
  ObjectLiteral(node) {
    if (node.children.length === 2) {
      return {};
    }
    if (node.children.length === 3) {
      let object = new Map();
      this.PropertyList(node.children[1], object);
      // object.prototype =
      console.log(object);
      return object;
    }
  },
  PropertyList(node, object) {
    if (node.children.length === 1) {
      this.Property(node.children[0], object);
    } else {
      this.PropertyList(node.children[0], object);
      this.Property(node.children[2], object);
    }
  },
  Property(node, object) {
    let name;
    if (node.children[0].type === 'Identifier') {
      name = node.children[0].name;
    } else if (node.children[0].type === 'StringLiteral') {
      name = evaluate(node.children[0]);
    }
    object.set(name, {
      value: evaluate(node.children[2]),
      writable: true,
      enumerable: true,
      configable: true,
    });
  },
};

function evaluate(node) {
  if (evaluator[node.type]) {
    return evaluator[node.type](node);
  }
}

////////////////////////////////////////////

window.js = {
  evaluate,
  parse,
};
