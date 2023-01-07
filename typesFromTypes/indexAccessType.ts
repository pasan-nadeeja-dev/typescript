// --------------------------- // 
// --- Indexed access type --- //
// --------------------------- //

type book = {title: string; pageCount: number; isComplete: boolean};
let bookTitle: book["title"];
let bookProperties: book[keyof book];
let anotherBookProperties: book["title" | "pageCount"];

let books = [
    {name: "dark", copies: 13},
    {name: 77, isSold: true}
]
let darkBookCopy: typeof books[number]["name"]