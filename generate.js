const names = ["Silva", "Leon", "Lukas", "Chris", "Anni"];
let wichtel = names.slice();
let pairs = [];

const generate = () => {
  let err = 0;
  wichtel = names.slice();
  pairs = [];
  for (person of names) {
    let wichtelName = person;
    let wichtelId = 0;
    while (wichtelName == person && wichtel.length > 0) {
      wichtelId = Math.floor(Math.random() * wichtel.length);
      wichtelName = wichtel[wichtelId];
    }
    if (wichtelName == person && wichtel.length == 1) {
      console.error("failed, trying again");
      err = -1;
    }
    pairs.push([person, wichtelName]);
    wichtel.splice(wichtelId, 1);
  }
  if (err == 0) {
    return pairs;
  }
  return err;
};

const generateNewPair = () => {
  let success = 0;
  do {
    success = generate();
    console.log("Trying again");
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

const b64 = Buffer.from(JSON.stringify(generateNewPair())).toString("base64");
console.log(b64);

module.exports = {
  generateNewPair,
  getPairsIds,
};
