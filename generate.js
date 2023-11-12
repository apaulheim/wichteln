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
  return err;
};

let sucess = 0;
do {
  sucess = generate();
} while (sucess != 0);

// console.log(pairs);
const b64 = Buffer.from(JSON.stringify(pairs)).toString("base64");
console.log(b64);
