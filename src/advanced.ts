/**
 * 类型推断
 */

let a1 = 1;
let b1 = [1];

let c1 = (x = 1) => x + 1;

window.onkeydown = (event) => {
  // console.log(event.button)
};

interface Foo {
  bar: number;
}

let foo = {} as Foo;
foo.bar = 1;

let foo1: Foo = {
  bar: 1,
};

/**
 * 类型兼容
 */

let s: string = "a";
// s = null

// 接口兼容性
interface X {
  a: any;
  b: any;
}

interface Y {
  a: any;
  b: any;
  c: any;
}

// 属性少的可以兼容属性多的，属性多的不能兼容少的
let x: X = { a: 1, b: 2 };
let y: Y = { a: 1, b: 2, c: 3 };
x = y;

// 函数兼容性
type Handler = (a: number, b: number) => void;
function hof(handler: Handler) {
  return handler;
}

// 1) 参数个数兼容
let handler1 = (a: number) => {};
hof(handler1);

let handler2 = (a: number, b: number) => {};
hof(handler2);

let handler3 = (a: number, b: number, c: number) => {};
// hof(handler3); // 不能兼容3个参数的函数

// 可选参数 和 剩余参数
// "strictFunctionTypes": false, 忽略严格函数类型
let a = (p1: number, p2: number) => {};
let b = (p1?: number, p2?: number) => {};
let c = (...args: number[]) => {};
a = b;
a = c;
// b = c;
// b = a;
c = a;
c = b;

// 2)参数类型
let handler4 = (a: string) => {};
// hof(handler4)

interface Point3D {
  x: number;
  y: number;
  z: number;
}

interface Point2D {
  x: number;
  y: number;
}

// interface的属性个数，多的兼容少的，少的不能兼容多的。
let p3d = (point: Point3D) => {};
let p2d = (point: Point2D) => {};

p3d = p2d;
// p2d = p3d;

// 3)函数返回值类型, 属性少的兼容多的。
let f = () => ({ name: "Alice" });
let g = () => ({ name: "Alice", location: "Xian" });
f = g;
// g = f;

// 4)函数重载
function overload(a: number, b: number): number;
function overload(a: string, b: string): string;
function overload(a: any, b: any): any {}

// 枚举兼容性
enum Fruit {
  Apple,
  Orange,
}
enum Color {
  Red,
  Yellow,
}
let fruit: Fruit.Apple = 3;
let num1: number = Fruit.Apple;
// let color: Color.Red = Fruit.Orange;

// 类兼容性
class A {
  constructor(p: number, q: number) {}
  id: number = 1;
  private name: string = "";
}

class B {
  static s = 1;
  constructor(p: number) {}
  id: number = 2;
  private name: string = "";
}

let aa = new A(1, 2);
let bb = new B(1);
// aa = bb;
// bb= aa;

// 子类和父类才能兼容
class C extends A {}
let cc = new C(1, 2);
aa = cc;
cc = aa;

// 泛型兼容性
interface Empty<T> {
  value: T;
}

// let obj1: Empty<number> = {};
// let obj2: Empty<string> = {};
// obj1 = obj2;

let log11 = <T>(x: T): T => {
  console.log('x');
  return x;
}

let log22 = <U>(u: U): U => {
  console.log('u');
  return u;
}
log11 = log22;

/**
 * 口诀：
 * 结构之间兼容：成员少的兼容成员多的
 * 函数之间兼容：参数多的兼容参数少的
 */


/**
 * 类型检查机制：类型保护
 */
enum LanguageType {
  Strong, Weak
}

class Java {
  helloJava() {
    console.log('Hello Java');
  }
  java: any;
}

class Javascript {
  helloJavascript() {
    console.log('Hello Javascript');
  }
  javascript: any;
}

function isJava(lang: Java | Javascript): lang is Java {
  return (lang as Java).helloJava !== undefined;
}

function getLanguage(type: LanguageType) {
  let lang = type === LanguageType.Strong ? new Java() : new Javascript();

  if(isJava(lang)) {
    lang.helloJava();
  } else {
    lang.helloJavascript();
  }

  // instanceof 类型保护
  if (lang instanceof Java) {
    lang.helloJava();
  } else {
    lang.helloJavascript();
  }

  // in 类型保护
  if ('java' in lang) {
    lang.helloJava();
  } else {
    lang.helloJavascript();
  }

  // typeof
  // if (typeof x === 'string') {
  //   x.length;
  // } else {
  //   x.toFixed(2)
  // }

  return lang;
}

getLanguage(LanguageType.Strong);