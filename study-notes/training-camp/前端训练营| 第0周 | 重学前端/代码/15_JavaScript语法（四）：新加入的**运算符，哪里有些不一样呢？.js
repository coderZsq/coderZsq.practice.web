{
  console.log(4 ** 3 ** 2);
  console.log(4 ** (3 ** 2));
  console.log((4 ** 3) ** 2);
}

{
  let a = 102, b = 324;

  a = a ^ b;
  b = a ^ b;
  a = a ^ b;

  console.log(a, b);
}

{
  console.log(false || 1); // 1
}

{
  console.log(false && undefined); // false
}