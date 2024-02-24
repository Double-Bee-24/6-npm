"use strict";
// 1.
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function getFirstWord(a) {
    return a.split(/ +/)[0].length;
}
// 2.
function getUserNamings(a) {
    return {
        fullname: a.name + " " + a.surname,
        initials: a.name[0] + "." + a.surname[0],
    };
}
// 3.
// <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining>
function getAllProductNames(a) {
    var _a;
    return ((_a = a === null || a === void 0 ? void 0 : a.products) === null || _a === void 0 ? void 0 : _a.map((prod) => prod === null || prod === void 0 ? void 0 : prod.name)) || [];
}
// 4.1
// easy way is using 'as' keyword
// hard way is ?...
function hey(a) {
    return "hey! i'm " + a.name();
}
hey({ name: () => "roman", cuteness: 100 });
hey({ name: () => "vasyl", coolness: 100 });
class Cat {
    constructor(patName, isCute) {
        this.isCute = isCute;
        this.patName = patName;
    }
    name() {
        return this.patName;
    }
}
class Dog {
    constructor(patName, woofsPerWeek) {
        this.woofsPerWeek = woofsPerWeek;
        this.patName = patName;
    }
    name() {
        return this.patName;
    }
}
function hey2(abstractPet) {
    return "hey! i'm " + abstractPet.name();
}
let a = new Cat("snizhok", true);
let b = new Dog("sirko", 333);
hey2(a);
hey2(b);
function hey3(a) {
    return ("hey! i'm " +
        a.name() +
        (a.type === "cat" ? "cuteness: " + a.cuteness : "coolness: " + a.coolness));
}
hey3({ name: () => "snizhok", type: "cat", cuteness: 100 });
hey3({ name: () => "sirko", type: "dog", coolness: 100 });
function stringEntries(a) {
    return Array.isArray(a) ? a : Object.keys(a);
}
// 6.
// ....can be hard, don't worry and SKIP if you do not know how to do it
function world(a) {
    return __awaiter(this, void 0, void 0, function* () {
        return "*".repeat(a);
    });
}
const hello = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield world(10);
});
hello()
    .then((r) => console.log(r))
    .catch((e) => console.log("fail"));
function summ(a) {
    const x = Object.keys(a).map((k) => {
        const elem = a[k];
        if (typeof elem === "undefined")
            return 2021;
        if (typeof elem.cvalue === "string")
            return +elem.cvalue || 2021;
        if (typeof elem.cvalue === "object")
            return summ(elem.cvalue);
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
