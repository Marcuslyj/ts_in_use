interface Customer {
  custname: string;
  buymoney: number;
}

type CustFn = (params: Customer) => string;
// infer占位
type CusParaTyp = CustFn extends (params: infer P) => any ? P : CustFn;
type CusParaTyp2 = CustFn extends (params: any) => infer R ? R : CustFn;
// 泛型通用
type ResultTyp<T> = T extends (params: any) => infer R ? R : never;
type CusResultTyp = ResultTyp<CustFn>;

type EleOfArr<T> = T extends Array<infer E> ? E : never;
type EleOfArrTest = EleOfArr<Array<string>>;

export {};
