abstract class Animal {
  eat() {
    console.log('eat');
  }

  // 无实现，在子类中实现
  abstract sleep(): void;
}

class Dog extends Animal{
  constructor(name: string) {
    super();
    this.name = name;
  }
  name: string;
  run() {}
  sleep(): void {
    console.log('Dog sleeping zzz');
  }
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

class Cat extends Animal {
  sleep() {
    console.log('Cat sleeping zzzzz');
  }
}

let cat = new Cat();

let animals: Animal[] = [dog, cat];
animals.forEach(a => {
  a.sleep();
})

class Workflow {
  step1() {
    return this;
  }
  step2() {
    return this;
  }
}

new Workflow().step1().step2();

class MyFlow extends Workflow {
  next() {
    return this;
  }
}

new MyFlow().next().step1().next().step2();