// 根类型
let data: Object = 1; // 除了 null undefined 其他基本能赋值
let data2: {} = 2; // {} 等同 Object

// 对象类型 object Array function
let o1: object = {};

// 合成类型
// 联合类型
let str: string | number = 1;
// 交叉类型
type O1 = { name: string };
type O2 = { age: number };
let o2: O1 & O2 = { name: "1", age: 1 };

// 字面量数据类型
type Num = 1 | 2;
let num: Num = 2;

// 使用never避免出现未来扩展新的类没有对应类型的实现
const fn = (params: string | number) => {
  if (typeof params === "string") {
  } else if (typeof params === "number") {
  } else {
    // never
    let d = params;
  }
};

export {};
