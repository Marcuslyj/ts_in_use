interface Todo {
  readonly name: string;
  title: string;
  completed: boolean;
  date?: Date;
  owner?: string;
}

/**
 * 可选属性变成非可选属性
 */
type Require<T> = {
  [K in keyof T]-?: T[K];
};

type testRequire = Require<Todo>;

/**
 * 属性变成可选属性
 */
type Partial<T> = {
  [K in keyof T]?: T[K];
  // [K in keyof T]+?: T[K];
};
type testPartial = Partial<Todo>;

/**
 * 去掉 readonly
 */
type Readonly<T> = {
  -readonly [K in keyof T]: T[K];
};
type testReadonly = Readonly<Todo>;

export {};
