const str: string = 'Hello';
console.log(str);

const isFeatching: boolean = true;
console.log('boolean = ', isFeatching);

const isLoading: boolean = false;
console.log('boolean = ', isLoading);

const int: number = 42;
console.log('number = ', int);

const num: number = 3e10;
console.log('num = ', num);

const numberArray: number[] = [1, 1, 2, 3, 5, 8, 13];
console.log('numberArray = ', numberArray);

const stringArray: string[] = ['Hello', 'TypeScript'];
console.log('stringArray = ', stringArray);

// Tuple - кортеж
const contact: [string, number] = ['Vladilen', 1234567];
console.log('Tuple[string, number] =', contact);

// Any
let variable: any = 42;
console.log('Any =', variable);
variable = 'New String';
console.log('Any =', variable);
variable = [];
console.log('Any =', variable);

// Void  --- Function ---
function sayMyName(name: string): void {
  console.log(name);
}
sayMyName('VOID --- Function ---');

// Never  --- Function ---
function throwError(message: string): never {
  throw new Error(message);
}
console.log('NEVER --- Function ---');

// throwError('NEVER --- Function ---');

function infinite(): never {
  while (true) {}
}

// Custom type
type Login = string | number | null | undefined;
const login: Login = 'login';
const login2: Login = 123;
console.log('Custom type --- login, login2 ---', login, login2);
