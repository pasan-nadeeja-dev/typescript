// 01. Arrays

let dogs: Array<string> = [];
dogs.push("blackie")

let cats: string[] = [];
cats.push("fiona")

// 02. Readonly array
// After define array then only read methods available

let cars: readonly string[] = ["cars"];

// cars.push("bmw") // error: push method not available in readonly array
cars.map(value => `value is ${value}`);