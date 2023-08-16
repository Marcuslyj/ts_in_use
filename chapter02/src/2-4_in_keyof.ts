interface Customer {
  custname: string;
  buymoney: number;
}

type CustFn = (params: Customer) => string;
// infer占位
interface Customer {
  custname: string;
  buymoney: number;
}

type CustKeyValsTyp = {
  [P in keyof Customer]: Customer[P];
};

export {};
