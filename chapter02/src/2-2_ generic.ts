class Order {
  orderid!: number;
  ordername!: string;
  static count: number;
  printOrd() {}
  static getCount() {}
}

// 泛型约束 extends
type InstancePropKeys<T extends object> = keyof T;
type OrderPropKeys = InstancePropKeys<Order>;

class ObjectRefImpl<T extends object, K extends keyof T> {}

type ObjTyp = { username: string; age: number };
type ObjKeysType<T extends object, K> = K extends keyof T ? K : never;
type TestObjKeysType = ObjKeysType<ObjTyp, "username">;
let k: TestObjKeysType = "username";

// 重载签名
function searchMsg(condition: string): string;
function searchMsg(condition: number): number;
function searchMsg(condition: string | number): string | number {
  if (typeof condition === "string") {
    return "abc";
  } else {
    return 123;
  }
}
searchMsg("qwe").replace("q", "");
searchMsg(12).toFixed();

export {};
