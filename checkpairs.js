const { generateNewPair, getPairsIds } = require("./generate");

let lastPairs = JSON.parse(
  atob(
    "W1siU2lsdmEiLCJMdWthcyJdLFsiTGVvbiIsIlNpbHZhIl0sWyJMdWthcyIsIkFubmkiXSxbIkNocmlzIiwiTGVvbiJdLFsiQW5uaSIsIkNocmlzIl1d"
  )
);
let currentPairs = generateNewPair();
console.log("Letzte Wichtelpaare (2023): ", getPairsIds(lastPairs));
console.log("Generierte Wichtelpaare: ", getPairsIds(currentPairs));
console.log("Generierte Wichtelpaare b64: ");
console.log(Buffer.from(JSON.stringify(currentPairs)).toString("base64"));
