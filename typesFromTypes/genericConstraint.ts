// ----------------------------- // 
// --- 02 Generic Constraint --- //
// ----------------------------- //

// 01. Type paramter with any, all and predefined property
// Create a interface with constrinat types and extend it

interface iWithLength {
    length: number
}

function seatModule<Type extends iWithLength>(arg: Type): Type{
    console.log(arg.length)
    return arg;
}

seatModule({colour: "red", length: 4}); // argumrnts must have length property

// 02. Using type parameters in generic constraint
// A parameter is a subset of another parameter

function getSubjectScore<Type, Key extends keyof Type>(subject: Type, score: Key){
    return subject[score]
}

let allResults = {"math": 80, "science": 76};

let scienceScore = getSubjectScore(allResults, "science");
// let artScore = getSubjectScore(allResults, "art") // error