/**
 * Extract => 条件类型的实现: 提取满足的
 */
// type Extract<T, U> = T extends U ? T : never;
type TestExtract = Extract<string | number | boolean, string | number>;

/**
 * Exclude: 提取不满足的
 */
type TestExclude = Exclude<string | number | boolean, string | number>;

export {};
