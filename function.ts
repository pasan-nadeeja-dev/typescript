// 01. types in function paramas

function userLogin(email: string, password: string, isPaid:boolean){
    return "Success";
}

userLogin("p@gmail.com","1qaz@WSX",false);

// 02. return void function in typescript

const getValue = (age: number):void => {}

// 03. return string/number function in typescript

const getName = (info: string) :string => "first-name"

// 04. return union types

function getStatus(age: number): boolean | string | never {
    if(age > 5) return false;
    return "success"
}

// 05. option type is not required
// readonly types cannot be reassigned (primitive properties)

type user = {
    readonly email: string,
    name: string
    phone?: number
}

let student: user = {
    email: "p@gmail.com",
    name: "ps"
}

// student.email = "t@gmail.com" cannot reassign beacuse of readonly property

// 06. intersection type
// able to combine types

type email = {
    address: string
}

type boy = email & {
    firstName: string
}

let boyObj: boy = {
    address: "sdf",
    firstName: "er"
}