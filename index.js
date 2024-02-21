function sum(a, b) {
  try {
    return a + b;
  } catch (e) {
    return 0;
  }
}

const theSum = sum(1, 3);

console.log('Sum is', theSum);
