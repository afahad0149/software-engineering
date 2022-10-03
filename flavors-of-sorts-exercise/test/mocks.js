function random (max) {
  return Math.floor(Math.random() * max);
}

function randomArray (length) {
  return Array.from({ length }, () => random(length * 2));
}

const randomArr = randomArray(100);
const sortedArr = [...randomArr].sort((a, b) => a - b);

module.exports = {
  randomArr,
  sortedArr,
};
