/**
 * Record可以替代 object
 */
function addObj(obj: Record<string, string | number>) {}

// 约束 key
type R1 = Record<"name" | "age", string | number>;
let r1: R1 = { name: "1", age: 1 };

type R2 = Record<string, string | number>;
let r2: R2 = { name: "1" };

type R = Record<string, any>;
let r: R = [1];
let r3: R = new Set();
let r4: R = new Map();
let r5: R = function () {};

export {};
