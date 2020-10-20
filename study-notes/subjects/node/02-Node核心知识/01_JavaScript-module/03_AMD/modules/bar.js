define(function () {
  const name = 'coderZsq';
  const age = 18;
  const sayHello = function (name) {
    console.log('你好' + name);
  }

  return {
    name,
    age,
    sayHello
  };
});