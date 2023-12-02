function stretch() {
  // Your code here
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
      console.log('done stretching');
    }, 1000);
  });

  return promise;
}

function runOnTreadmill() {
  // Your code here
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
      console.log('done running on treadmill');
    }, 1000);
  });

  return promise;
}

function liftWeights() {
  // Your code here
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
      console.log('done lifting weights');
    }, 2000);
  });

  return promise;
}

function workout() {
  // Your code here
  stretch()
    .then(() => runOnTreadmill())
    .then(() => liftWeights())
    .then(() => console.log('done working out'));
}


/* ============================ TEST YOUR CODE ============================

Run the file (`node phase-1.js`) and check your output against the expected
output.
*/


workout();
  // should print out the following:
    // done stretching
    // done running on treadmill
    // done lifting weights
    // done working out
