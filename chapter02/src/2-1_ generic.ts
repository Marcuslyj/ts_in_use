// 泛型
// 特点1：定义时不明确，使用时必须明确成某种具体数据类型的数据类型
// 特点2：编译期间进行数据类型检查的数据类型

interface Ref<T = any> {
  value: T;
}

let ref: Ref<string> = {
  value: "lala",
};
let ref2: Ref = {
  value: "lala",
};

export {};
