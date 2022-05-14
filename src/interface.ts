interface List {
  readonly id: number;
  name: string;
  // [x: string]: any; //索引
  age?: number;
}

interface Result {
  data: List[];
}

function render(result: Result) {
  result.data.forEach((v) => {
    console.log(v.id, v.name);
  });
}

let result = {
  data: [
    { id: 1, name: "A", sex: "male" },
    { id: 2, name: "B", age: 20 },
  ],
} as Result;
render(result);

interface StringArray {
  [index: number]: string;
}
let chars: StringArray = ["A", "B"];

// 既可以string作索引也可以number做索引
interface Names {
  [x: string]: string;
  [y: number]: string;
}
