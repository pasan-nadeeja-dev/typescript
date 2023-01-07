// --------------------------- // 
// --- typeof Type operator --- //
// --------------------------- //

// 01. typeof return current type of the variable
// typeof can be use in values (type and value is different)

let cloth = "denim";

let trouser: typeof cloth; // typeof return cloth variable type

// 02. can use with predefined types

type lizard = (colour: string) => boolean;

type iguana = ReturnType<lizard>; // ReturnType<> is a predefined generic type which return type of the type parameter

function butterfly(){
    return {
        wings: 2
    }
}

type fly = ReturnType<typeof butterfly> // fly type will be {wings: number}