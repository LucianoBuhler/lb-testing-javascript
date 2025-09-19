// Example usage:
// const qs = "?name=John&Doe&age=30";
// console.log(parse(qs)); // { name: 'John Doe', age: '30' }
const parse = (queryString) => {
  if (queryString.startsWith('?')) {
    queryString = queryString.slice(1);
  }

  const pairs = queryString.split('&');
  const params = {}

  for (const pair of pairs) {
    const [key, value] = pair.split('=');
    params[decodeURIComponent(key)] = decodeURIComponent(value || '');
  }
  
  return params;
};

// Example usage:
// console.log(stringify({ name: 'John Doe', age: 30 })); // "?name=John%20Doe&age=30"
const stringify = (queryObject) => {
  let queryString = '';

  for (const key of Object.keys(queryObject)) {
    queryString += `&${encodeURIComponent(key)}=${encodeURIComponent(queryObject[key])}`;

  }
  
  return `?${queryString.substring(1)}`;
};

module.exports = { parse, stringify };
