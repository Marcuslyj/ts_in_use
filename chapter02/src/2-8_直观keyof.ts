interface Customer {
  name: string;
  email: string;
  phone: string;
}

// 不直观
type TestKeyof = keyof Customer;

// 直观(泛型会逐个处理)
type PureKeyOf<T> = T extends any ? T : never;
type TestKeyof2 = PureKeyOf<keyof Customer>;

export {};
