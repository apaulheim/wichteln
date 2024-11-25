const { generateNewPair, getPairsIds } = require("./generate");

let lastPairs = JSON.parse(
  atob(
    "W1siU2lsdmEiLCJMdWthcyJdLFsiTGVvbiIsIlNpbHZhIl0sWyJMdWthcyIsIkFubmkiXSxbIkNocmlzIiwiTGVvbiJdLFsiQW5uaSIsIkNocmlzIl1d"
  )
);
let currentPairs = generateNewPair();
console.log("Last pairs: ", getPairsIds(lastPairs));
console.log("Last pairs: ", lastPairs);
console.log("Current pairs: ", getPairsIds(currentPairs));
console.log("Current pairs b64: ");
console.log(Buffer.from(JSON.stringify(currentPairs)).toString("base64"));
