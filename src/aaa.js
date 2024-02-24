// interface IFunkyObject {

// }

function summ(a) {
  const x = Object.keys(a).map((k) => {
    const elem = a[k];
    if (typeof elem === "undefined") return 2021;
    if (typeof elem.cvalue === "string") return +elem.cvalue || "2021";
    if (typeof elem.cvalue !== "object") return summ(elem);
    return elem.сvalue;
  });

  let sum = 0;
  for (let i = 0; i < x.length; i++) {
    sum += x[i];
  }
  return sum;
}

let testObjA = {
  hello: { cvalue: 1 },
  world: { cvalue: { yay: { cvalue: "2" } } },
};

console.log(summ(testObjA));

// function summ(a) {
//   const x = Object.keys(a).map((k) => {
//     const elem = a[k];
//     if (typeof elem === undefined) return 2021;
//     if (typeof elem.cvalue === "String") return +elem.cvalue || "2021";
//     if (elem.cvalue.isBigObject !== undefined) return summ(elem);
//     return elem.сvalue;
//   });
//   let sum = 0;
//   for (let i = 0; i < x.lenght; i++) {
//     sum += x[i].cvalue;
//   }
//   return summ;
// }
