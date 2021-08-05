{
  var token = [];
  const start = char => {
    if (char === '1'
      || char === '2'
      || char === '3'
      || char === '4'
      || char === '5'
      || char === '6'
      || char === '7'
      || char === '8'
      || char === '9'
      || char === '0'
    ) {
      token.push(char);
      return inNumber;
    }
    if (char === '+'
      || char === '-'
      || char === '*'
      || char === '/'
    ) {
      emmitToken(char, char);
      return start
    }
    if (char === ' ') {
      return start;
    }
    if (char === '\r'
      || char === '\n'
    ) {
      return start;
    }
  }
  const inNumber = char => {
    if (char === '1'
      || char === '2'
      || char === '3'
      || char === '4'
      || char === '5'
      || char === '6'
      || char === '7'
      || char === '8'
      || char === '9'
      || char === '0'
    ) {
      token.push(char);
      return inNumber;
    } else {
      emmitToken("Number", token.join(""));
      token = [];
      return start(char); // put back char
    }
  }

  function emmitToken(type, value) {
    console.log(value);
  }

  var input = "1024 + 2 * 256"

  var state = start;

  for (var c of input.split(''))
    state = state(c);

  state(Symbol('EOF'))
  // 1024
  // +
  // 2
  // *
  // 256
}

{
  function AdditiveExpression() {


  }
  function MultiplicativeExpression() {


  }
}

{
  var tokens = [{
    type: "Number",
    value: "1024"
  }, {
    type: "+",
    value: "+"
  }, {
    type: "Number",
    value: "2"
  }, {
    type: "*",
    value: "*"
  }, {
    type: "Number",
    value: "256"
  }, {
    type: "EOF"
  }];
}

{
  function AdditiveExpression(source) {
    if (source[0].type === "MultiplicativeExpression") {
      let node = {
        type: "AdditiveExpression",
        children: [source[0]]
      }
      source[0] = node;
      return node;
    }
    if (source[0].type === "AdditiveExpression" && source[1].type === "+") {
      let node = {
        type: "AdditiveExpression",
        operator: "+",
        children: [source.shift(), source.shift(), MultiplicativeExpression(source)]
      }
      source.unshift(node);
    }
    if (source[0].type === "AdditiveExpression" && source[1].type === "-") {
      let node = {
        type: "AdditiveExpression",
        operator: "-",
        children: [source.shift(), source.shift(), MultiplicativeExpression(source)]
      }
      source.unshift(node);
    }
  }
}

{
  function Expression(source) {
    if (source[0].type === "AdditiveExpression" && source[1] && source[1].type === "EOF") {
      let node = {
        type: "Expression",
        children: [source.shift(), source.shift()]
      }
      source.unshift(node);
      return node;
    }
    AdditiveExpression(source);
    return Expression(source);
  }
  function AdditiveExpression(source) {
    if (source[0].type === "MultiplicativeExpression") {
      let node = {
        type: "AdditiveExpression",
        children: [source[0]]
      }
      source[0] = node;
      return AdditiveExpression(source);
    }
    if (source[0].type === "AdditiveExpression" && source[1] && source[1].type === "+") {
      let node = {
        type: "AdditiveExpression",
        operator: "+",
        children: []
      }
      node.children.push(source.shift());
      node.children.push(source.shift());
      MultiplicativeExpression(source);
      node.children.push(source.shift());
      source.unshift(node);
      return AdditiveExpression(source);
    }
    if (source[0].type === "AdditiveExpression" && source[1] && source[1].type === "-") {
      let node = {
        type: "AdditiveExpression",
        operator: "-",
        children: []
      }
      node.children.push(source.shift());
      node.children.push(source.shift());
      MultiplicativeExpression(source);
      node.children.push(source.shift());
      source.unshift(node);
      return AdditiveExpression(source);
    }
    if (source[0].type === "AdditiveExpression")
      return source[0];
    MultiplicativeExpression(source);
    return AdditiveExpression(source);
  }
  function MultiplicativeExpression(source) {
    if (source[0].type === "Number") {
      let node = {
        type: "MultiplicativeExpression",
        children: [source[0]]
      }
      source[0] = node;
      return MultiplicativeExpression(source);
    }
    if (source[0].type === "MultiplicativeExpression" && source[1] && source[1].type === "*") {
      let node = {
        type: "MultiplicativeExpression",
        operator: "*",
        children: []
      }
      node.children.push(source.shift());
      node.children.push(source.shift());
      node.children.push(source.shift());
      source.unshift(node);
      return MultiplicativeExpression(source);
    }
    if (source[0].type === "MultiplicativeExpression" && source[1] && source[1].type === "/") {
      let node = {
        type: "MultiplicativeExpression",
        operator: "/",
        children: []
      }
      node.children.push(source.shift());
      node.children.push(source.shift());
      node.children.push(source.shift());
      source.unshift(node);
      return MultiplicativeExpression(source);
    }
    if (source[0].type === "MultiplicativeExpression")
      return source[0];

    return MultiplicativeExpression(source);
  };

  var source = [{
    type: "Number",
    value: "3"
  }, {
    type: "*",
    value: "*"
  }, {
    type: "Number",
    value: "300"
  }, {
    type: "+",
    value: "+"
  }, {
    type: "Number",
    value: "2"
  }, {
    type: "*",
    value: "*"
  }, {
    type: "Number",
    value: "256"
  }, {
    type: "EOF"
  }];
  var ast = Expression(source);

  console.log(ast);
  // {
  //   type: 'Expression',
  //     children: [
  //       { type: 'AdditiveExpression', operator: '+', children: [Array] },
  //       { type: 'EOF' }
  //     ]
  // }


  function evaluate(node) {
    if (node.type === "Expression") {
      return evaluate(node.children[0])
    }
    if (node.type === "AdditiveExpression") {
      if (node.operator === '-') {
        return evaluate(node.children[0]) - evaluate(node.children[2]);
      }
      if (node.operator === '+') {
        return evaluate(node.children[0]) + evaluate(node.children[2]);
      }
      return evaluate(node.children[0])
    }
    if (node.type === "MultiplicativeExpression") {
      if (node.operator === '*') {
        return evaluate(node.children[0]) * evaluate(node.children[2]);
      }
      if (node.operator === '/') {
        return evaluate(node.children[0]) / evaluate(node.children[2]);
      }
      return evaluate(node.children[0])
    }
    if (node.type === "Number") {
      return Number(node.value);
    }
  }

  console.log(evaluate(ast))
}