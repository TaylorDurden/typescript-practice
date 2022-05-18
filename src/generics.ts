interface Length {
  length: number;
}

function log<T extends Length>(value: T): T {
  console.log(value, value.length);
  return value;
}

log<string[]>(["a", "b"]);
log(["a", "b"]); // 类型推断
log({length: 1});
log('123');

// type Log = <T>(value: T) => T;
// let myLog: Log = log;

// interface Log<T> {
//   (value: T): T
// }
// let myLog: Log<number> = log;
// myLog(1);

class Log<T> {
  run(value: T) {
    console.log(value);
    return value;
  }
}

let log1 = new Log<number>();
log1.run(1);

let log2 = new Log();
log2.run({ a: 1 });
log2.run('1');