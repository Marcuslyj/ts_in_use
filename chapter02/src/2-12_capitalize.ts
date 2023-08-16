interface Todo {
  title: string;
  completed: boolean;
  add(): number;
  del(): number;
}

// 重映射
type Degree<T extends Record<string, any>> = {
  [P in keyof T as T[P] extends Function
    ? `do${Capitalize<P & string>}`
    : never]: T[P];
};

type TestDegree = Degree<Todo>;

export {};
