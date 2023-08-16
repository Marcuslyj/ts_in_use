// 1.模板字符类型
type MB<T, U> = `${T & string}/${U & string}`;
type TestMB = MB<"menu", "setActiveIndex" | "setCollapse">;

// 配合 enum
enum MenuActions {
  setActiveIndex = "setActiveIndex",
  setCollapse = "setCollapse",
}
type TestMB2 = MB<"menu", MenuActions>;
type TestMB3 = MB<MenuActions, "menu">;

// 实践:扁平模块属性名
type Modules = {
  menu: {
    setActiveIndex: (index: string) => string;
    setCollapse: (index: string) => string;
  };
  tabs: {
    setTabs: () => void;
  };
};

// 2.先拿到父模块的属性名
type ModulesSpliceKeys<T> = {
  [Key in keyof T]: MB<Key, keyof T[Key]>;
}[keyof T];

//  3.父子模块联合起来
type TestModulesSpliceKeys = ModulesSpliceKeys<Modules>;

export {};
