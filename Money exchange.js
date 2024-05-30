function calculateChange(totalChange, denominations) {
  let remainingChange = totalChange;
  let changeCount = {};

  // sort the bills/coins in a descending order
  denominations.sort((a, b) => b - a);

  // initialize the count for each denomination bill
  denomination.forEach((denomination) => {
    changeCount[denomination] = 0;
  });

  // start the count for each denomination, (loop : total change - denomination & then check the condition, if true => count ++, else return total n° of denom" count)
  denomination.forEach((denomination) => {
    while (remainingChange >= denomination) {
      remainingChange -= denomination;
      changeCount[denomination]++;
    }
  });

  // in case the denominations doesn't fit the change i.e at the end of process, there's still a remaining change
  if (remainingChange !== 0) {
    return console.log("There's no bill to execute the change operation");
  }

  return changeCount;
}

// Example
let change = 9985;
let denomination = [5, 10, 20, 50, 100, 200, 500, 1000, 2000];

result = calculateChange(change, denomination);

if (result) {
  return console.log(
    `The initial change is : ${change}, after exchanging with bills, here's the transaction : `,
    result
  );
}
