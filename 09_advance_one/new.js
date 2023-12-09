const url = require('url');

const urlString = 'https://jsonplaceholder.typicode.com/user';
const parsedUrl = new URL(urlString);

console.log(parsedUrl);
console.log('Pathname:', parsedUrl.pathname);
console.log('Hostname:', parsedUrl.hostname);
