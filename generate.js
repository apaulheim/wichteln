const names = ["Silva", "Leon", "Lukas", "Chris", "Anni"];
let wichtel = names.slice();
let pairs = [];

const generate = () => {
  // Create shuffled copy using Fisher-Yates
  wichtel = names.slice();
  for (let i = wichtel.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [wichtel[i], wichtel[j]] = [wichtel[j], wichtel[i]];
  }

  // Check if anyone got themselves
  for (let i = 0; i < names.length; i++) {
    if (names[i] === wichtel[i]) {
      // Swap with next person (wrapping around)
      const swapIdx = (i + 1) % names.length;
      // If swap also causes a match, restart
      if (names[swapIdx] === wichtel[i] || names[i] === wichtel[swapIdx]) {
        return -1;
      }
      [wichtel[i], wichtel[swapIdx]] = [wichtel[swapIdx], wichtel[i]];
    }
  }

  // Build pairs
  pairs = names.map((person, i) => [person, wichtel[i]]);
  return pairs;
};

const generateNewPair = () => {
  let success = 0;
  do {
    success = generate();
  } while (success == -1);
  return success;
};

const getPairsIds = (p) => {
  let ids = [];
  for (pair of p) {
    ids.push([names.indexOf(pair[0]), names.indexOf(pair[1])]);
  }
  return ids;
};

module.exports = {
  generateNewPair,
  getPairsIds,
};
