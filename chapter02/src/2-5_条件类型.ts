// 整体比较
type Test = string | number | boolean extends string | number ? string : never;

// 区别于泛型，逐个迭代比较输出
type CondTyp<T> = T extends string | number ? T : never;
type TestCondTyp = CondTyp<string | number | boolean>;

/**
 * 动态增加属性
 */
type AddAttrToObj<T, K extends string, V> = {
  [P in keyof T | K]: P extends keyof T ? T[P] : V;
};
interface Customer {
  name: string;
  age: number;
  phone: string;
}

type TestAddAttr = AddAttrToObj<Customer, "weixin", string>;

export {};
