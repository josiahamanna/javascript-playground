console.log('Call the timer');
setTimeout(function () {
  console.log('timer completed');
}, 1000);

// fetch does two things here
// 1. calls network request with url
// 2. return a promise object
const networkCall = fetch('https://jsonplaceholder.typicode.com/todos/1');

console.log(networkCall);

const data = networkCall.then((response) => {
  console.log(response);
  return response.json();
});
data.then((json) => {
  console.log(networkCall.json());
});
for (let i = 0; i < 100000000; ) {
  i++;
}

console.log('me first!');
