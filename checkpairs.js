const { generateNewPair, getPairsIds } = require("./generate");

let pairs23 = JSON.parse(
  atob(
    "W1siU2lsdmEiLCJMdWthcyJdLFsiTGVvbiIsIlNpbHZhIl0sWyJMdWthcyIsIkFubmkiXSxbIkNocmlzIiwiTGVvbiJdLFsiQW5uaSIsIkNocmlzIl1d"
  )
);
let pairs24 = JSON.parse(
  atob(
    "W1siU2lsdmEiLCJDaHJpcyJdLFsiTGVvbiIsIkFubmkiXSxbIkx1a2FzIiwiTGVvbiJdLFsiQ2hyaXMiLCJTaWx2YSJdLFsiQW5uaSIsIkx1a2FzIl1d"
  )
);
let pairs25 = JSON.parse(
  atob(
    "W1siU2lsdmEiLCJMZW9uIl0sWyJMZW9uIiwiQ2hyaXMiXSxbIkx1a2FzIiwiQW5uaSJdLFsiQ2hyaXMiLCJMdWthcyJdLFsiQW5uaSIsIlNpbHZhIl1d"
  )
);
let currentPairs = generateNewPair();
console.log("Wichtelpaare 2023: ", getPairsIds(pairs23));
console.log("Wichtelpaare 2024: ", getPairsIds(pairs24));
console.log("Wichtelpaare 2025: ", getPairsIds(pairs25));
console.log("Generierte Wichtelpaare: ", getPairsIds(currentPairs));
console.log("Generierte Wichtelpaare b64: ");
console.log(Buffer.from(JSON.stringify(currentPairs)).toString("base64"));
