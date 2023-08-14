// 限制数组中元素只读
const arr = [1, 2, 3] as const;
// arr[1] = 1;

// 可变元组(固定部分+可变部分)
type Arr = [number, string, ...any[]];

// 可变元组 tag
type Arr2 = [age: number, name: string, ...rest: any[]];
