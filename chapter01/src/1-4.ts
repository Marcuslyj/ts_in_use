// 接口：可继承(type 不可以)

const symid = Symbol("productno");

interface Product {
  name: string;
  buy(): void;
  price: number;
  [symid]: number | string;
}

interface Book extends Product {
  author: string;
  [x: string]: any; // 可索引签名
}

// let b: Book = {};

interface List {
  add(): void;
}

class ArrayList implements List {
  add() {
    console.log("add");
  }
}

// 索引访问类型
type A = Book["author" | "price"];
type B = Book[typeof symid];

type PKeys = keyof Product;
let pkey: PKeys = "price";
// 直观看到值
type AllKeys<T> = T extends any ? T : never;
type PKeys2 = AllKeys<keyof Product>;

let str: string | undefined = undefined;
function fn(data?: string) {
  data!.toString(); // !忽略undefined
}

// any，unknown，undefined 可以接收 undefined
// any，unknown，null 可以接收 null
let data: unknown = undefined;
let data2: unknown = null;

export {};
