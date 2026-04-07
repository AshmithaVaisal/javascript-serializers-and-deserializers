let numbers = [10, 20, 30];

let myPromise = new Promise((resolve, reject) => {
  if (numbers.length > 0) {
    resolve(numbers);
  } else {
    reject("Array is empty");
  }
});

myPromise
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });