class Dog {
  constructor(name: string) {
    this.name = name;
  }
  name: string;
  run() {}
  static eat() {} // 只能通过类来访问 Dog.eat()
}

console.log(Dog.prototype);

let dog = new Dog('Kigi');
console.log(dog);

class Kigi extends Dog {
  constructor(name: string, public color: string) {
    super(name);
    this.color = color;
  }
  // color: string; // public声明为实例成员
  // 只能自己访问
  private shortLegRun() {};

}