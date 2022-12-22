// types in function paramas

function userLogin(email: string, password: string, isPaid:boolean){
    return "Success";
}

userLogin("p@gmail.com","1qaz@WSX",false);

// return void function in typescript

const getValue = (age: number):void => {}

// return string/number function in typescript

const getName = (info: string) :string => "first-name"