const isProduction = undefined;

console.log(!isProduction);

process.env.isProduction = isProduction;
console.log(!process.env.isProduction);

console.log(process.env.isProduction, typeof process.env.isProduction);
console.log(process.env);

process.env.abc = 123;
console.log(process.env.abc, typeof process.env.abc);

const info = {
  sq: {},
};

info.sq.abc = isProduction;
console.log(info.sq.abc, typeof info.sq.abc);
