
const sum = function(fromN, toN) {
  // Sum all the values from fromN up to toN
  if (toN > fromN)
    return toN + sum(fromN, toN - 1);
  return fromN;

};

module.exports = sum;
