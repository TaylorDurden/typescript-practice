// 原始类型
let bool: boolean = true;
let num: number | undefined | null = 123; // 联合类型
let str: string = "bas";

// 数组
let arr1: number[] = [1, 2, 3];
let arr2: Array<number> = [1, 2, 3];
// 联合类型
let arr3: Array<number | string> = [1, 2, 3, "4"];

// 元组 tuple
let tuple: [number, string] = [0, "123"];
tuple.push(2);
console.log(tuple);
// tuple[2], //error

// 函数
let add = (x: number, y: number) => x + y;
let compute: (x: number, y: number) => number; // 定义函数类型
compute = (a, b) => a + b; // 实现

// 对象
let obj: { x: number; y: number } = { x: 1, y: 2 };
obj.x = 3;

// symbol
let s1: symbol = Symbol();
let s2 = Symbol();

// undefined, null
let un: undefined = undefined; // 只能为undefined
let nu: null = null;
num = null;
num = undefined;

// void
let noReturn = () => {};

// any, 不建议使用
let x;

// never
let error = () => {
  throw new Error("err");
};

let endless = () => {
  while (true) {}
};

// 枚举：一组有名字的常量集合

// 数字枚举
enum Role {
  Reporter,
  Developer,
  Owner,
}

// 字符串枚举
enum Msg {
  Success = "成功",
  Fail = "失败",
}

// 异构枚举, 不建议使用
enum Answer {
  N,
  Y = 'Yes'
}

// 枚举成员
enum Char {
  // const
  a,
  b = Char.a,
  c = 1 + 3,
  // computed
  d = Math.random(),
  e = '123'.length
}