// const info = {
//   name: 'sq',
//   age: 18,
// };

// info.name = 'kobe';

//

type Method = 'GET' | 'POST';
function request(url: string, method: Method) {}

type Request = {
  url: string;
  method: Method;
};

const options = {
  url: 'https://www.coderzsq.org/abc',
  method: 'POST',
} as const;

request(options.url, options.method);

export {};
