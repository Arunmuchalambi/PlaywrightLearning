// Rule of thumb for confusing comparison
// == -> checks for value only (loose equality)
// === -> checks for value and type (strict equality)

console.log("" == 0); // true
console.log("" === 0); // false
console.log("0" == 0); // true
console.log("0" === 0); // false
console.log(""== "0"); // false
console.log("" === "0"); // false
console.log(false == 0); // true
console.log(false === 0); // false
console.log(null == undefined); // true
console.log(null === undefined); // false
console.log(null == 0); // false
console.log(null === 0); // false
console.log(null == 0 ||null > 0); // false
console.log(null >= 0); // true -> coercion of null to 0 (go to the spec for more details)
console.log(undefined == null); // true
console.log(undefined == 0); // false
console.log(undefined === 0); // false
console.log(NaN == NaN); // false



