'use strict';

/***
 * @return {function}
 */
function makeAdder() {
  // write code here

  let summary = 0;
  const adder = (number) => {
    if (number === undefined) {
      const finalSum = summary;

      summary = 0;

      return finalSum;
    }
    summary = summary + number;

    return adder;
  };

  return adder;
}

module.exports = makeAdder;
