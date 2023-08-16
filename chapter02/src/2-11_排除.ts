interface Book {
  name: string;
  pages: number;
  author: string;
  publisher: string;
}

type Omit<T, K extends keyof T> = {
  [P in keyof T as P extends K ? never : P]: T[P];
};
type Omit2<T, K extends keyof T> = {
  [P in keyof T as Exclude<P, K>]: T[P];
};
type Omit3<T, K extends keyof T> = {
  [P in keyof T as never]: T[P];
};

type TestOmit = Omit<Book, "name">;
type TestOmit2 = Omit2<Book, "name">;

export {};
