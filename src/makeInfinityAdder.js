'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  // write code here

  let summary = 0;
  const makeAdder = (number) => {
    if (number === undefined) {
      const finalSum = summary;

      summary = 0;

      return finalSum;
    }
    summary = summary + number;

    return makeAdder;
  };

  return makeAdder;
}

module.exports = makeInfinityAdder;
