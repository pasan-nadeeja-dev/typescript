// --------------------------- // 
// --- keyof Type operator --- //
// --------------------------- //

// 01. will be union type of keys

type dimension = {
    width: number;
    height: number;
}

type boxDimension = keyof dimension;

let box: boxDimension = "height";
let giftBox: boxDimension = "width";

// 02. If type has number or string as index signature, then keyof will return those as type

type parts = {[n: string]: boolean}; // index signature -> [n: string]
let bmw: parts = {"spoiler": true};

type partCount = keyof parts; // partCount type string | number
let bmwPartCount:partCount = 2;
let audiPartCount:partCount = "two";
// let isHondaPartCount:partCount = false; // error

