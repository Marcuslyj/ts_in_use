// interface vs type

// 区别1.定义类型范围不同
// interface 只能定义对象类型 或者拿接口当名字的函数类型
// type 可以定义任何类型，包括基础类型、联合类型、交叉类型、元组

// 交叉类型
type O1 = { name: string };
type O2 = { age: number };
interface I1 {
  name: string;
}
interface I2 {
  age: number;
}
let o2: O1 & O2 = { name: "1", age: 1 };
let i1: I1 & I2 = { name: "1", age: 1 };

// 元组
interface Car {
  brand: string;
}
interface Bike {
  color: string;
}
type Vechicle = [Car, Bike];

// 区别2.接口可以extends一个或者多个接口或类 实现一个或多个接口，也可以继承 type。但type 类型没有继承功能。
// 区别3. interface 不支持联合类型
// 区别 4.接口可合并声明
interface Error {
  name: string;
}
interface Error {
  message: string;
}

let error: Error = { name: "Error", message: "Error" };
