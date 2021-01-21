var str = 'Hello';
console.log(str);
var isFeatching = true;
console.log('boolean = ', isFeatching);
var isLoading = false;
console.log('boolean = ', isLoading);
var int = 42;
console.log('number = ', int);
var num = 3e10;
console.log('num = ', num);
var numberArray = [1, 1, 2, 3, 5, 8, 13];
console.log('numberArray = ', numberArray);
var stringArray = ['Hello', 'TypeScript'];
console.log('stringArray = ', stringArray);
// Tuple - кортеж
var contact = ['Vladilen', 1234567];
console.log('Tuple[string, number] =', contact);
// Any
var variable = 42;
console.log('Any =', variable);
variable = 'New String';
console.log('Any =', variable);
variable = [];
console.log('Any =', variable);
// Void  --- Function ---
function sayMyName(name) {
    console.log(name);
}
sayMyName('VOID --- Function ---');
// Never  --- Function ---
function throwError(message) {
    throw new Error(message);
}
console.log('NEVER --- Function ---');
// throwError('NEVER --- Function ---');
function infinite() {
    while (true) { }
}
var login = 'login';
var login2 = 123;
console.log('Custom type --- login, login2 ---', login, login2);
