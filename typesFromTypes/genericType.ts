// Expressing types in terms of other types

// ------------------------ // 
// --- 01 Generic Types --- //
// ------------------------ //

function customerIdentity<Type>(arg: Type): Type {
    return arg;
}

let customer: <Type>(arg: Type) => Type = customerIdentity;

// customer variable type can also write as a call signature of an object literal type
// refer:- object literal type example
let catObject: {colour: string, age: number} = {colour: "white", age: 4}

let customerObjLiteral: { <Type>(arg: Type): Type } = customerIdentity;

// Generic interface using call signature of an object literal type

interface iCustomerGeneric {
    <Type>(arg: Type): Type
}

let customerGenericInterface: iCustomerGeneric = customerIdentity;

// generic interface with type

interface iCustomerGenericWithType<Type> {
    (arg: Type): Type
}

let customerGenericInterfaceWithType: iCustomerGenericWithType<number> = customerIdentity;