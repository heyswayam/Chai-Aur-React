//Both are similar to forrange loop in C++
//for-of --- made for arrays (doesnt works in obj)

const arr = ["Halo1", "Halo2", "Halo3"];

const myGames = {
  game1: "NFS",
  game2: "Spiderman",
  game3: "GTA 5",
  game4: "forza",
};
for (const i of arr) {
  // console.log(i);
}

//for-in --- made for objects 
// (does work in array, but it being treated as object (key acts 0,1,2,3,..))

for (const key in myGames) {
  console.log(key);
}
