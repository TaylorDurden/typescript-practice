/**
 * union type: let a: string | number;
 * a must be a string or number.
 */

/**
 * intersection type: let a: aType & bType;
 * a must have all aType and bType properties.
 */

/**
 * intersection type, 交叉类型
 */
interface IDog {
  run(): void;
}

interface ICat {
  jump(): void;
}

let pet: IDog & ICat = {
  run() {},
  jump() {},
};

class Dog1 implements IDog {
  run() {
    console.log("Dog running...");
  }
  eat() {}
}

class Cat1 implements ICat {
  jump(): void {}
  eat() {}
}

enum Sex {
  Boy,
  Girl,
}

function getPet(sex: Sex) {
  let pet = sex === Sex.Boy ? new Dog1() : new Cat1();
  pet.eat();
  return pet;
}

/**
 * union type 联合类型
 */
let aaa: number | string = "a";
let bbb: "a" | "b" | "c";
let ccc: 1 | 2;

/**
 * 联合类型的类型保护
 */
interface Square {
  kind: "square";
  size: number;
}

interface Rectangle {
  kind: "rectangle";
  width: number;
  height: number;
}

interface Circle {
  kind: 'circle';
  r: number;
}

type Shape = Square | Rectangle | Circle;

// 若少定义一种Shape的case，就会报错
function area(s: Shape): number {
  switch (s.kind) {
    case 'square':
      return s.size * s.size;
    case 'rectangle':
      return s.width * s.height;
    case 'circle':
      return Math.PI * s.r ** 2;
  }
}

function area1(s: Shape) {
  switch (s.kind) {
    case 'square':
      return s.size * s.size;
    case 'rectangle':
      return s.width * s.height;
    case 'circle':
      return Math.PI * s.r ** 2;
    default:
      return ((e: never) => {throw new Error(e)})(s); //若少定义一种Shape的case，这里就会报错
  }
}

console.log(area({kind: 'circle', r: 1}))
console.log(area1({kind: 'square', size: 3}))