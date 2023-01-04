// 01. union type

type alphaNumeric = number | string;

let age: alphaNumeric = 24;
let ageString: alphaNumeric = "24";
// let ageBool: alphaNumeric = true; // boolean value is not assinable to ageBool

// 02. literal type

type drink = "pepsi" | "cola" | "orange";

function makeDrink(flavor: drink){}

makeDrink("pepsi");
// makeDrink(2); // only above value can pass as argument