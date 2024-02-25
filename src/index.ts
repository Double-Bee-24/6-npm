// 1.

function getFirstWord(a: string) {
  return a.split(/ +/)[0].length;
}

// 2.

function getUserNamings(a: { name: string; surname: string }) {
  return {
    fullname: a.name + " " + a.surname,
    initials: a.name[0] + "." + a.surname[0],
  };
}

// 3.

// <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining>
function getAllProductNames(a?: { products?: { name?: string }[] }) {
  return a?.products?.map((prod) => prod?.name) || [];
}

// 4.1

// easy way is using 'as' keyword
// hard way is ?...
function hey(a: { name: () => string; cuteness?: number; coolness?: number }) {
  return "hey! i'm " + a.name();
}
hey({ name: () => "roman", cuteness: 100 });
hey({ name: () => "vasyl", coolness: 100 });

// 4.2
interface IPet {
  name: () => string;
}

class Cat implements IPet {
  patName: string;
  isCute: boolean;

  constructor(patName: string, isCute: boolean) {
    this.isCute = isCute;
    this.patName = patName;
  }

  name() {
    return this.patName;
  }
}

class Dog implements IPet {
  patName: string;
  woofsPerWeek: number;

  constructor(patName: string, woofsPerWeek: number) {
    this.woofsPerWeek = woofsPerWeek;
    this.patName = patName;
  }

  name() {
    return this.patName;
  }
}

function hey2(abstractPet: IPet) {
  return "hey! i'm " + abstractPet.name();
}
let a = new Cat("snizhok", true);
let b = new Dog("sirko", 333);
hey2(a);
hey2(b);

// 4.3
interface animal {
  name: () => string;
  type: string;
  cuteness?: number;
  coolness?: number;
}

function hey3(a: animal) {
  return (
    "hey! i'm " +
    a.name() +
    (a.type === "cat" ? "cuteness: " + a.cuteness : "coolness: " + a.coolness)
  );
}
hey3({ name: () => "snizhok", type: "cat", cuteness: 100 });
hey3({ name: () => "sirko", type: "dog", coolness: 100 });

// 5.
// google for Record type

type stringContainer = {} | [];

function stringEntries(a: stringContainer) {
  return Array.isArray(a) ? a : Object.keys(a);
}

// 6.
// ....can be hard, don't worry and SKIP if you do not know how to do it

async function world(a: number) {
  return "*".repeat(a);
}
const hello = async () => {
  return await world(10);
};
hello()
  .then((r) => console.log(r))
  .catch((e) => console.log("fail"));

// Task 3

interface BigObject {
  [key: string]:
    | { cvalue: number | string | undefined | BigObject }
    | undefined;
}

function summ(a: BigObject) {
  const x = Object.keys(a).map((k) => {
    const elem = a[k];
    if (typeof elem === "undefined" || typeof elem.cvalue === "undefined") {
      return 2021; // Додав "|| typeof elem.cvalue === "undefined" "
    }
    if (typeof elem.cvalue === "string") return +elem.cvalue || 2021;
    if (typeof elem.cvalue === "object") return summ(elem.cvalue);
    return elem.cvalue;
  });

  let sum = 0;
  for (let i = 0; i < x.length; i++) {
    sum += x[i];
  }
  return sum;
}

const testObjA = {
  hello: { cvalue: 1 },
  world: { cvalue: { yay: { cvalue: "2" } } },
};

const testObjB = { undefined };

const testObjC = {
  hello: { cvalue: "1 cat" },
};

console.log(summ(testObjA));
console.log(summ(testObjB));
console.log(summ(testObjC));
